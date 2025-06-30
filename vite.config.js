// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: "/uplifting-futures-hub/", // <-- your repo name
  plugins: [react(), tsconfigPaths()],
});
