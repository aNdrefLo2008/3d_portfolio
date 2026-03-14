import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':   ['react', 'react-dom', 'react-router-dom'],
          'three-vendor':   ['three', '@react-three/fiber', '@react-three/drei'],
          'motion-vendor':  ['framer-motion'],
          'i18n-vendor':    ['i18next', 'react-i18next'],
          'emailjs-vendor': ['@emailjs/browser'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@react-three/fiber', '@react-three/drei', 'three'],
  },
});