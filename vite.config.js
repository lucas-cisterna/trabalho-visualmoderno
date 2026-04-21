import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trabalho-visualmoderno/',
  plugins: [react()],
})