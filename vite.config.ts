import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { UserConfig, defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(props => {
  process.env = { ...process.env, ...loadEnv(props.mode, process.cwd()) };

  let config: UserConfig = {
    build: {
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
    base: process.env.VITE_BASE_URL ? process.env.VITE_BASE_URL + '/' : undefined,
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      react(),
      viteTsconfigPaths(),
      splitVendorChunkPlugin(),
      svgrPlugin(),
    ],
  };

  return config;
});
