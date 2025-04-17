import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Replace with your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
