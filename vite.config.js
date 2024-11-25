import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = ${env.VITE_API_URL ?? "http://localhost:8080"};

  return {
    server: {
      proxy: {
        "/api": API_URL,
      },
      "/images": "",
    },
    build: {
      outDir: "dist",
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});