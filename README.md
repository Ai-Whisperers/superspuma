# Superspuma

Colchones y Sommiers en Paraguay. Fábrica desde 1976.

**Live:** https://superspuma.paragu-ai.com
**Repo:** github.com/Ai-Whisperers/superspuma

## Stack

- Next.js 15 (standalone output)
- Tailwind CSS v4
- TypeScript
- Docker + Docker Swarm
- Traefik reverse proxy

## Content

All content in `content/es.json`. Product data, FAQ, testimonials, store locations all editable there.

## Build & Deploy

```bash
npm run build
docker build -t superspuma:prod .
docker stack deploy -c docker-compose.yml superspuma
```

## Pages

- Home (catálogo completo, comparativa, FAQ)
- Tienda
- Producto/[slug] (páginas individuales de cada colchón)
- Nosotros
- Tiendas
- Guías de compra
- Garantía
- FAQ
- Contacto
- Promociones
- Privacidad / Términos
