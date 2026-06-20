import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://z1won.github.io',
  outDir: './dist',
  base: '/',
  output: 'static',
  vite: {
    ssr: {
      external: ['svelte']
    }
  }
});
