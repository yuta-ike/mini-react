import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@minireact/": path.join(__dirname, "src/minireact/"),
    },
  },
});
