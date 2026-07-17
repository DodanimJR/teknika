import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teknika.co.cr',
  integrations: [sitemap()],
  output: 'static',
});
