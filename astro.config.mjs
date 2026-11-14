// @ts-check
import { createHash } from 'node:crypto';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { themeInitScript } from './src/scripts/theme.ts';

// Layout.astro inlines the theme script with `is:inline`, which Astro doesn't
// hash for the CSP on its own. Hash it here so the policy always matches the
// current script, even after edits.
const themeScriptHash = `sha256-${createHash('sha256').update(themeInitScript).digest('base64')}`;

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and Open Graph metadata.
  site: 'https://harrisonafry.com',

  // Static output: `astro build` emits plain HTML/CSS/JS into ./dist
  output: 'static',

  build: {
    inlineStylesheets: 'auto',
  },

  // Adds a Content-Security-Policy <meta> tag to every page. Astro hashes the
  // scripts and styles it emits, so only those can run; anything injected
  // into the page later is blocked. (frame-ancestors can't be set from a
  // <meta> tag, so nginx.conf sends that one as a header.)
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
      scriptDirective: {
        hashes: [themeScriptHash],
      },
    },
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
