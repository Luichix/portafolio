import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // /portafolio/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Contexts': path.resolve(__dirname, './src/contexts'),
      '@Data': path.resolve(__dirname, './src/data'),
      '@Language': path.resolve(__dirname, './src/language'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Interfaces': path.resolve(__dirname, './src/interfaces'),
      '@Redux': path.resolve(__dirname, './src/redux'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
  server: {
    host: true,
  },
})
