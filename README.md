# FlowPro Plumbing — portfolio demo

A standalone React + TypeScript + Vite + Tailwind CSS website. Fictional South African plumbing business; no real endorsements, credentials, completed projects or response-time claims.

## Run locally

Use Node.js 22 LTS (22.12 or later recommended).

```sh
npm ci
npm run dev
```

Open the address printed by Vite. Production validation: `npm run build`. Preview the output with `npm run preview`.

## Structure

- `src/App.tsx`: page sections, mobile navigation, quote form and accessible enquiry dialog
- `src/config.ts`: fictional business contacts, demo mode, service copy, FAQs and WhatsApp URL builder
- `src/styles.css`: Tailwind import, brand tokens, layout, breakpoints, focus and reduced-motion rules
- `src/main.tsx`: React entry point
- `public/images/`: local compressed WebP photographs
- `public/favicon.svg`: custom brand icon
- `public/robots.txt`, `public/sitemap.xml`: crawler assets
- `index.html`: SEO and Open Graph metadata
- `vercel.json`: Vercel build configuration and basic security headers
- `ASSETS.md`: photo sources and licensing

## Demo and contact behaviour

`demoMode: true` intentionally intercepts quote and call actions. The form validates required fields and consent, then displays the prepared message in a native modal. Visitors can copy it. No information is stored or submitted; there is no backend or email delivery. This keeps portfolio traffic away from an unknown owner of a placeholder phone number.

For a real business, replace all contacts in `src/config.ts`, then set `demoMode: false`. Calls open `tel:` and enquiries open `https://wa.me/` with a URL-encoded message. WhatsApp numbers need country code and digits only. Visitors still press Send in WhatsApp. Verify the destination on a real device.

Keep demo mode enabled when sharing as a fictional sales demo. The review and gallery disclosures should remain visible.

## Deploy separately to Vercel

1. Put this folder in its own Git repository, or choose `flowpro-plumbing` as the Vercel Root Directory if using a parent repository.
2. Framework: Vite. Install: `npm ci`. Build: `npm run build`. Output: `dist`.
3. No environment variables or server are required.
4. Replace `https://example.com/` in `public/sitemap.xml` with the deployment URL. Add its sitemap URL to `public/robots.txt`, and add matching canonical and `og:url` tags in `index.html`.
5. Keep `noindex, follow` for a fictional demo. Only remove it for a real business with verified content.
6. Check mobile menu, all anchor links, form validation, message preview, clipboard and keyboard focus. On live conversion test actual calls and WhatsApp on Android/iOS.
7. Review every claim, service area, opening hour, review and image before adapting for a client. Replace illustrative testimonials with approved real reviews.

SEO uses descriptive titles and Open Graph text. A fictional company should not publish misleading LocalBusiness, aggregate rating or address data. The included structured data identifies a demo WebPage with an illustrative Service, not a real local business. Add verified LocalBusiness details only when adapting to a real company. No social-preview image was commissioned.

## Privacy and accessibility

The form holds information only in React memory for the current page session. Copying is a deliberate visitor action. In live mode WhatsApp receives the message when the visitor follows the enquiry flow; add the real business's privacy policy before using this to collect customer information. The site includes a skip link, labelled inputs, native validation, native disclosure widgets and a native dialog with Escape and focus restoration. No analytics, tracking pixels or external fonts.
