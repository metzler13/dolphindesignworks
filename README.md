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

### Cloudflare Pages
1. In the Cloudflare dashboard, go to *Workers & Pages → Create → Pages → Connect to Git* and pick this repo.
2. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`. Add the environment variable `NODE_VERSION` = `22`.
3. Contact form: get a free access key at web3forms.com (enter rick@dolphindesignworks.com and the key arrives by email). Paste it into `web3formsKey` in `src/data/site.ts`, then commit.
4. Under *Custom domains*, add `dolphindesignworks.com`. This is easiest when the domain's DNS is already on Cloudflare.

### Netlify
1. *Add new project → Import an existing project*, then pick this repo. The build settings are detected automatically.
2. Leave `web3formsKey` empty and Netlify Forms is used. Enable form detection and add an email notification under *Forms*. You can also use Web3Forms here.
3. Add the domain under *Domain management*.

### Vercel
Import the repo. Redirects are in `vercel.json`. Use a Web3Forms key for the form.

### Redirects
`public/_redirects` sends old WordPress URLs (`/feed/`, `/category/...`, `/blog/`) to their new pages with 301s. Cloudflare Pages and Netlify both read it. Old `/?p=123` short links are redirected by a small script on the homepage, so they work on any host.

## Analytics

Google Analytics 4 and the Meta Pixel load only after a visitor accepts the cookie banner (`src/components/Consent.astro`). The IDs are in `src/data/site.ts`.

## Before switching DNS

- Keep the WordPress site running until the new one is live and checked.
- Submit `https://dolphindesignworks.com/sitemap-index.xml` in Google Search Console after launch.
