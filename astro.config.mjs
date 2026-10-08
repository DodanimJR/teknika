import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teknika.co.cr',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/template-demo') && !page.includes('/404'),
    }),
  ],
  output: 'static',
});
