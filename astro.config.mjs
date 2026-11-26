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
  redirects: {
    '/hero-header-v6-2/': '/',
    '/category/agency-process-expertise/': '/blog-articles/',
    '/category/local-web-design-services/': '/blog-articles/',
    '/category/news/': '/blog-articles/',
    '/category/small-business-online-presence/': '/blog-articles/',
    '/category/tips-tricks/': '/blog-articles/',
    '/category/uncategorized/': '/blog-articles/',
    '/category/web-design-services/': '/blog-articles/',
    '/category/website-management-maintenance/': '/blog-articles/',
    '/blog/': '/blog-articles/',
  },
});
