import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://Zhaoyitong589.github.io';
const base = process.env.BASE_PATH || '/legal-ai-portfolio/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
