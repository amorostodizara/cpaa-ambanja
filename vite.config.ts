import { defineConfig } from "vite";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
