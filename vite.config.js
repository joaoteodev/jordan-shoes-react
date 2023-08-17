import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jordan-shoes-react",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '../../assets/styles/style.scss';"
      }
    }
  }
});
