# Superspuma — AI Agent Guide

## Quick Links
- **Live:** https://superspuma.paragu-ai.com
- **Repo:** github.com/Ai-Whisperers/superspuma
- **Docker service:** superspuma_web (2 replicas)
- **VPS:** 72.61.44.159
- **Traefik:** Host(`superspuma.paragu-ai.com`)

## Architecture
Cloudflare (DNS, SSL) → VPS → Traefik → superspuma_web:3000

## Pages
Home, Tienda, Producto, Nosotros, Tiendas, Guías, Garantía, FAQ, Contacto, Promociones, Privacidad, Términos

## Design System
Light theme (navy/white). Primary: #0F1624. Secondary: #3A4A5D. Accent: #B3C7E3. Fonts: Playfair Display (headings), Open Sans (body). Voice: professional, informative, Spanish.

## Content
All content in `content/es.json`. Products, FAQ, testimonials, stores — all there.

## Build & Deploy
```bash
npm run build
docker build -t superspuma:prod .
docker stack deploy -c docker-compose.yml superspuma
```

## Critical Patterns
- All content in content/es.json
- No database — fully static
- WhatsApp is the primary CTA
- Light theme with navy accents
- 24 products with real PYG pricing
