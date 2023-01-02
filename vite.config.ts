import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // const env = loadEnv(mode, process.cwd(), ''),
  // return {
  //   // vite config
  //   define: {
  //     __APP_ENV__: env.APP_ENV,
  //   },
  // }
  plugins: [react()],
  resolve: {
    alias: {
      // src: resolve(__dirname, './src'),
      // styles: resolve(__dirname, './src/styles'),
      // elements: resolve(__dirname, './src/elements'),
      // routes: resolve(__dirname, './src/routes'),
      // layouts: resolve(__dirname, './src/layouts'),
      // pages: resolve(__dirname, './src/pages'),
      // atoms: resolve(__dirname, './src/atoms'),
      // services: resolve(__dirname, './src/services'),
      // components: resolve(__dirname, './src/components'),
      // assets: resolve(__dirname, './src/assets'),
      // utils: resolve(__dirname, './src/utils')
    }
  }
})
