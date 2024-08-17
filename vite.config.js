import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': "https://chai-or-backend-fullstack.onrender.com/api/partyMenu"
    }
  },
  plugins: [react()],
})
