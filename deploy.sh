#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"
[ -f .env ] && { set -a; source ./.env; set +a; }

SERVICE="superspuma_web"
VERSION=$(git rev-parse --short HEAD)
DATE=$(date +%Y%m%d-%H%M)
TAG="superspuma:prod-$VERSION-$DATE"
LATEST="superspuma:prod"

echo "--- preflight"
command -v docker >/dev/null
command -v npm >/dev/null

if [ ! -f app/page.tsx ]; then
  echo "ERROR: app/page.tsx missing (root route unavailable)"
  exit 1
fi

if [ -d src/app ] && find src/app -type f | grep -q .; then
  echo "ERROR: src/app still contains files. Keep a single App Router source under /app only."
  exit 1
fi

if [ ! -f public/robots.txt ] || [ ! -f public/sitemap.xml ]; then
  echo "ERROR: robots.txt or sitemap.xml missing"
  exit 1
fi

if grep -R "SITE_URL_PLACEHOLDER" public/robots.txt public/sitemap.xml >/dev/null 2>&1; then
  echo "ERROR: SEO placeholders found in robots/sitemap"
  exit 1
fi

echo "--- build next"
npm run build

if [ ! -f .next/server/app/index.html ]; then
  echo "ERROR: Next build missing .next/server/app/index.html (root route not generated)"
  exit 1
fi

echo "--- docker build: $TAG"
docker build -t "$TAG" -t "$LATEST" .

echo "--- container health precheck"
CID=$(docker run -d --rm "$TAG")
cleanup() { docker rm -f "$CID" >/dev/null 2>&1 || true; }
trap cleanup EXIT
sleep 4
docker exec "$CID" wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/

echo "--- deploy rolling update: $SERVICE"
docker service update --image "$TAG" "$SERVICE" --update-order start-first --detach=false

echo "--- done: $TAG"