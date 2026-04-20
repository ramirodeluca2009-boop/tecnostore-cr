import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

function imageApiPlugin(route, folder) {
  return {
    name: `api-${folder}`,
    configureServer(server) {
      server.middlewares.use(route, (req, res) => {
        const dir = path.resolve(`public/images/${folder}`)
        let files = []
        if (fs.existsSync(dir)) {
          files = fs.readdirSync(dir).filter(f =>
            /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(f)
          )
        }
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(files))
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imageApiPlugin('/api/controles', 'controles'),
    imageApiPlugin('/api/joysticks', 'joysticks'),
    imageApiPlugin('/api/dispenser', 'dispenser'),
    imageApiPlugin('/api/accesorios', 'accesorios'),
  ],
})
