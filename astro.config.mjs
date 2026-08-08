import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://richardlbecker.com',
  output: 'static',
  trailingSlash: 'never',
  redirects: {
    '/thoughts': '/',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
