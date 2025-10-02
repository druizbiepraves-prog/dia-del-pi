// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
