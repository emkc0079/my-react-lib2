import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "SharedUILibrary",
      fileName: (format) => `shared-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Add these lines
    },
  },
});
