import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Every JSX text goes through the translator (src/i18n/jsx-runtime.js) so the whole site can switch language.
  plugins: [react({ jsxImportSource: '@i18n' })],
  resolve: { alias: { '@i18n': path.resolve(here, 'src/i18n') } },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
