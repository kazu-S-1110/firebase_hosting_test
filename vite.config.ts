import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, ".");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "public",
    rollupOptions: {
      input: {
        main: resolve(root, "/index.html"),
        sub: resolve(root, "/503.html"),
      },
    },
  },
});
