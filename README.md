# Dolphin Design Works website (Astro)

The static [Astro](https://astro.build) rebuild of dolphindesignworks.com, migrated from WordPress/Divi.

## Commands

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies (Node 22+)             |
| `npm run dev`     | Local dev server at http://localhost:4321   |
| `npm run build`   | Build the static site into `dist/`          |
| `npm run preview` | Serve the built site locally                |

## Where things live

- `src/data/site.ts`: contact details, services, process steps, projects, testimonials and analytics IDs. Most homepage text edits go here.
- `src/content/blog/*.md`: blog posts. Each one is served at `/<file-name>/`, the same URLs WordPress used.
- `src/content/pages/*.md`: Privacy Policy and Terms of Service.
- `src/assets/uploads/`: images. Astro resizes and converts them to WebP at build time.
- `src/pages/index.astro`: homepage layout. `src/styles/global.css`: brand colors and fonts.

## Add a blog post

Create `src/content/blog/my-new-post.md`:

```md
---
title: "My New Post"
description: "One or two sentences for Google and social previews."
pubDate: 2026-12-01
heroImage: ../../assets/uploads/my-image.png
heroAlt: "What the image shows"
categories: ["Local Web Design Services"]
---

Post text in Markdown…
```

Set `draft: true` to hide a post. Commit and push, and the host rebuilds the site.

## Deploying

**Netlify (recommended: the contact form works with no extra setup)**
1. In Netlify, choose *Add new site → Import from Git* and pick this repo. The build command is `npm run build` and the publish directory is `dist`.
2. Under *Forms*, enable form detection. Under *Forms → Notifications*, add an email notification to rick@dolphindesignworks.com.
3. Under *Domain management*, add `dolphindesignworks.com`, then update DNS at the registrar as Netlify instructs.
4. `public/_redirects` sends old WordPress URLs (`/feed/`, `/category/...`, `/?p=123`) to their new homes with 301s.

**Vercel**: import the repo. `vercel.json` holds the same redirects. Netlify Forms won't work there, so point the form's `action` in `src/components/ContactForm.astro` at a Formspree endpoint.

## Analytics

Google Analytics 4 and the Meta Pixel load only after a visitor accepts the cookie banner (`src/components/Consent.astro`). The IDs are in `src/data/site.ts`.

## Before switching DNS

- Keep the WordPress site running until the new one is live and checked.
- Submit `https://dolphindesignworks.com/sitemap-index.xml` in Google Search Console after launch.
