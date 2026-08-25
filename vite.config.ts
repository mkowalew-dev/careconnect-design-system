import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

const externalDeps = Object.keys(pkg.dependencies ?? {});

export default defineConfig({
  define: {
    __DESIGN_SYSTEM_VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [
    react(),
    dts({ include: ['src'], exclude: ['src/**/*.stories.tsx'], rollupTypes: false }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        ...externalDeps.map((dep) => new RegExp(`^${dep}($|/)`)),
      ],
    },
  },
});
