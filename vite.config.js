import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://karthik-a4.github.io/myapp.io/',
  plugins: [react()],
})
