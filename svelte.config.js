import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    // 1. THIS IS THE MAGIC BULLET! It stops GitHub from deleting your JS.
    appDir: 'app', 
    paths: {
      // 2. THIS MUST MATCH YOUR GITHUB REPO NAME EXACTLY! 
      // If your repo URL is github.com/username/cunt, it must be lowercase '/cunt'
      base: process.argv.includes('dev') ? '' : '/CUNT' 
    }
  }
};

export default config;
