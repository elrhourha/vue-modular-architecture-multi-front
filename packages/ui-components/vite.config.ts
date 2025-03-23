import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // Generate types entry file
      include: ['src/**/*'], // Include all files in src
      outDir: 'dist/types', // Output directory for .d.ts files
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'UiComponents',
      fileName: (format) => `ui-components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'dist', // Output JS files to dist
  },
});
