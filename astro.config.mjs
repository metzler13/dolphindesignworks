// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dolphindesignworks.com',
  // WordPress served every URL with a trailing slash; keep them identical.
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/thanks/') })],
  vite: { plugins: [tailwindcss()] },
});
