import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/Rally-House/",
  build: {
    outDir: "docs",
  },
  plugins: [vue()],
});
