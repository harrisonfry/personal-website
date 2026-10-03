// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and Open Graph metadata.
  site: 'https://harrisonafry.com',

  // Static output: `astro build` emits plain HTML/CSS/JS into ./dist
  output: 'static',

  build: {
    inlineStylesheets: 'auto',
  },

  // Tailwind v4 is wired in as a Vite plugin; its config lives in
  // src/styles/global.css (`@theme`), not a tailwind.config.js file.
  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },
});
