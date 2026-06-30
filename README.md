# Dottee Plus Website

Production-oriented static marketing website for Dottee Plus, a premium corporate gifting and brand merchandise studio.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Static export for Cloudflare Pages
- No backend, database, CMS, payment gateway, or Docker

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://127.0.0.1:3000`.

## Build

```bash
pnpm build
pnpm lint
```

Static output is generated in `out/`.

## Project Structure

```text
src/app/              App Router pages, metadata, sitemap, robots
src/components/       Shared layout and page sections
src/components/ui/    Brand primitives
src/lib/data.ts       Product, process, contact, and navigation content
public/logos/         Dottee Plus logo assets from the design handoff
```

## Design System Summary

The implementation follows the uploaded Dottee Plus handoff:

- Brand wordmark: `dottee•plus`
- Colors: orange `#FF5C1A`, teal `#0ABFB8`, purple `#6B3FA0`, charcoal `#1A1A24`, warm white `#FAF8F5`
- Fonts: Syne for display, DM Sans for body, DM Mono for labels
- Visual language: premium corporate gifting studio, vibrant Dottee Plus accents, dark editorial hero, angled merch stage, proof strips, and procurement-first sections
- Conversion paths: bulk quote CTA, WhatsApp CTA, mobile sticky action bar, procurement-friendly 3-step quote form UI

## Pages

- Home: B2B hero, trust strip, corporate solutions, Brand Experience Studio, welcome kits, apparel, event merch, printing, portfolio, process, quote CTA
- Products: corporate buying groups for onboarding, apparel, office essentials, events, premium gifts, and printing methods
- About: brand merchandise studio positioning, standards, values, process story
- Quote / Contact: UI-only procurement brief flow

## Current Integration Placeholders

- WhatsApp number: `+91 98765 43210`
- Email: `hello@dotteeplus.com`
- Quote form is UI-only for this static phase
- Product/client photography and real client logos should be replaced with verified assets before launch
