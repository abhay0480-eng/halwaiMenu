import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/apiv1': {
        target: 'https://chai-or-backend-fullstack.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    }
  },
  plugins: [react()],
})
