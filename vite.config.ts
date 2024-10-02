import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://staging.dev.rapidcanvas.net',
        secure: false,
        changeOrigin: true,
        headers: {
          'Origin': 'https://staging.dev.rapidcanvas.net',
          'Referer': 'https://staging.dev.rapidcanvas.net'
        },
      },
    },
  },
});
