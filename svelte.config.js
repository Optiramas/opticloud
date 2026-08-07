// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x',           // or use the env var if you prefer:
      // runtime: process.env.VERCEL_RUNTIME || 'nodejs22.x',

      regions: ['iad1'],               // single region – safe on Pro
      maxDuration: 300,                // seconds – Pro allows up to 900
      split: false,                    // one function for all routes (simpler)
      precompress: true,               // gzip + brotli for static files (recommended)
    })
  }
};

export default config;