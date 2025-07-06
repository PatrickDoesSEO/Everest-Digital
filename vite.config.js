import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Everest-Digital/', // Fixed base path for GitHub Pages
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '5173-ie6zgucpoa9d45vrnv9sv-debe966a.manusvm.computer',
      '5174-ie6zgucpoa9d45vrnv9sv-debe966a.manusvm.computer',
      '5174-il2imbw7bptn5pw3836ep-e5c0aff3.manusvm.computer',
      '5173-il2imbw7bptn5pw3836ep-e5c0aff3.manusvm.computer',
      '5174-i61sga2z1wy6v957ktw57-e5c0aff3.manusvm.computer',
      '5173-i61sga2z1wy6v957ktw57-e5c0aff3.manusvm.computer',
      '5173-il3f64pbhy85pvcz8anva-e5c0aff3.manusvm.computer',
      '5174-iuk16kf6zuihx9wloy68w-e5c0aff3.manusvm.computer',
      '5173-iij1o5kfzxhucp0kmfrxy-e5c0aff3.manusvm.computer',
      '5174-ind7xcn0blidvd68s8u1g-e5c0aff3.manusvm.computer'
    ]
  }
})
