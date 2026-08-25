/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import pkg from './package.json' with { type: 'json' };
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

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
  // Storybook Vitest integration — runs stories as tests.
  // See: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
