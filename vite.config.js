import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const HOST = process.env.VITE_HOST || 'localhost';
const PORT = parseInt(process.env.VITE_PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: HOST,
    port: PORT
  }
})