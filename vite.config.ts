import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    // Outras opções de build podem ser configuradas aqui, como base de URL
    // base: '/nome-do-repo-se-necessário/',
  },
});
