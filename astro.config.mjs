// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), svelte(), alpine()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
});