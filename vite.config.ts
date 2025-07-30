import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/me",
  plugins: [react(), tailwindcss()],

  server: {
    port: 5050,
    host: true,
  },
  optimizeDeps: {
    exclude: ["aos"],
  },
});
