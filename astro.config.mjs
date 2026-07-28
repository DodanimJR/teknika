import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://teknika.co.cr',
  integrations: [sitemap()],
  output: 'static',
  adapter: cloudflare()
});