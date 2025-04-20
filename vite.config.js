import { defineConfig } from 'vite'; // eslint-disable-line
import react from '@vitejs/plugin-react'; // eslint-disable-line

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
