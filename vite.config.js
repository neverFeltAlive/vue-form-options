import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import { join, resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

const rootDir = resolve(__dirname, 'src');

export default defineConfig(() => {
  return {
    plugins: [vue(), eslintPlugin()],
    resolve: {
      alias: {
        '@components': join(rootDir, 'components'),
        '@utils': join(rootDir, 'utils'),
        '@assets': join(rootDir, 'assets'),
      },
    },
  };
});
