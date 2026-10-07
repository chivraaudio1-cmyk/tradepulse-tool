# TradePulse Tool

A mobile-first PWA designed for professional market analysis and paper trading workflows.

## Features

- Dark trading dashboard inspired by institutional charting tools
- Mobile-first responsive layout
- Dashboard tabs for Activated, Stopped, and Featured assets
- Candlestick chart with price scale, time scale, hover crosshair, pan, zoom, and countdown
- Signal card with analytical confidence, trend, and indicators
- Demo paper trading panel with virtual cash balance
- Installable PWA with manifest and service worker
- Clean market data service abstraction ready for REST + WebSocket providers

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Live market data configuration

This app is designed to support real OHLC market-data providers through WebSocket and REST APIs.

1. Copy `.env.example` to `.env` and configure provider details.
2. Keep API keys server-side or in your deployment environment.
3. Do not commit secrets to frontend source.
4. If no live provider is configured, the app displays a clear offline state and connection reminder instead of fake live data.

## Important

- No guaranteed profit claims are made.
- Trading signals are analytical outputs based on available live or historical data, not guaranteed predictions.
- The app intentionally does not fabricate random live prices when no provider is configured.

## PWA notes

- `manifest.webmanifest` enables installability on Android.
- `service-worker.js` caches static assets for offline access.
- `icon-192.svg` and `icon-512.svg` provide the app icon and splash usage support.
