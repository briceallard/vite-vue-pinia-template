/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON == "true" ? "./" : "./",
  plugins: [vue({ reactivityTransform: true })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: {
    hmr: {
      clientPort: 8080,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts,vue}"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
