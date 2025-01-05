import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emotion/react': '@emotion/react',
      '@emotion/styled': '@emotion/styled',
      '@mui/styled-engine': '@mui/styled-engine',
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import "slick-carousel/slick/slick.css";
          @import "slick-carousel/slick/slick-theme.css";
        `,
      },
    },
  },
});
