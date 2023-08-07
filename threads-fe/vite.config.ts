import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

const _dirname = path.dirname(new URL(import.meta.url).pathname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(_dirname, "./src"),
    },
  },
})
