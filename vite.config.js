import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/nexcent/' : '/',
  plugins: [react(), tailwindcss(), flowbiteReact()],
})
