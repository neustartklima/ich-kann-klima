import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import viteTestPlugin from "vite-plugin-test"

const plugins = [vue()]
if (process.env.NODE_ENV === "test") {
  plugins.push(viteTestPlugin({}))
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "404": resolve(__dirname, "404.html"),
      },
    },
  },
})
