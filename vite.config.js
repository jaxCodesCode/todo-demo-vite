import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig(({command}) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(_dirname,  './src')
      }
    },
    base: '/'
  };

  if (command !== 'serve') {
    config.base = '/todo-demo-vite/'
  }

  return config; 
})
