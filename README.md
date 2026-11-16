# LylaStorage

A personal portfolio site built with Next.js, showcasing small projects by [LylatierN](https://github.com/LylatierN).

## Projects

### QR Maker
Generate QR codes for URLs, plain text, Wi-Fi, email, phone numbers, and SMS. Customize colors (including separate eye-module color), error correction level, and size. Download as PNG or SVG, or copy to clipboard.

### KU Engineering Open House 2025
Fullscreen slide presentation for the KU Faculty of Engineering Open House 2025. Covers CPE and SKE programs.

Controls (on the slide page):
- `→` or `Space` — next slide
- `←` — previous slide
- `Escape` — reset to idle
- Click anywhere on idle screen — start
- Click right half of a slide — next
- Click left half of a slide — previous

Optionally, control slides remotely from another device via `/openhouse/remote` (requires Pusher — see below).

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [Pusher Channels](https://pusher.com) (optional, for remote slide control)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Remote Slide Control (Optional)

The `/openhouse/remote` page lets you control slides from a second device (e.g. your phone) in real time. This requires a free [Pusher](https://pusher.com) account.

Create a `.env.local` file at the project root:

```
NEXT_PUBLIC_PUSHER_KEY=your_app_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
PUSHER_APP_ID=your_app_id
PUSHER_SECRET=your_secret
```

See `.env.local.example` for a template. Without these variables, slides still work using keyboard and click controls.

## Deployment

Deployed on [Vercel](https://vercel.com). To enable remote slide control on Vercel, add the same four environment variables under **Project Settings → Environment Variables**, then redeploy.
