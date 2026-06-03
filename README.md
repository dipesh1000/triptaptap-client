# TripTaptap Landing Site

Public marketing homepage for [TripTaptap](https://triptaptap.com). Built with Vite, React, and Tailwind CSS.

Design source: [Figma — Mobile-Responsive Homepage](https://www.figma.com/design/Mi9GGwbhBaWhGAQcxKHj1U/Mobile-Responsive-Homepage-Design).

## Setup

```bash
cd frontend-client
npm install
cp .env.example .env   # optional: App Store / Play Store URLs
npm run dev
```

Open http://localhost:5173 (default Vite port).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production static build (`dist/`) |

## Configuration

Edit `src/config/site.ts` for support email and section anchors.

Optional `.env` (see `.env.example`):

- `VITE_APP_STORE_URL` — iOS App Store link
- `VITE_PLAY_STORE_URL` — Google Play link

Until those are set, download buttons scroll to the **#download** section in the footer.

## Deploy

Build output is static files suitable for any CDN or reverse proxy on **triptaptap.com** (see repo `VPS_DEPLOYMENT.md` for API/admin subdomains).

```bash
npm run build
# serve dist/ with nginx, Caddy, Vercel, Netlify, etc.
```

## Project layout

```
src/app/App.tsx           # page sections
src/app/components/       # Header, Hero, Footer, …
src/config/site.ts        # URLs & anchors
```
# triptaptap-client
