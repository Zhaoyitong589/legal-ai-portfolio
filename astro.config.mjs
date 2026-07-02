import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL;

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
