import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:
          mode === 'development'
            ? 'http://localhost:3000' // Saat development pakai backend local
            : 'https://be-ecommerce-isaac.vercel.app/', // Saat production pakai backend Vercel
        changeOrigin: true,
      },
    },
  },
}));
