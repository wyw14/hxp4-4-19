import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 5119,
    strictPort: true,
    open: true
  }
});