import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "404": resolve(__dirname, "404.html"),
      },
    },
  },
})
