import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      /* output: {
        //для просмотра размера зависимостей
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      }, */
    },
  },
  server: {
    open: true,
    port: 3000,
  },

  plugins: [react(), viteTsconfigPaths(), splitVendorChunkPlugin(), svgrPlugin()],
});
