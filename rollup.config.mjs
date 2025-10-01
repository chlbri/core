import { defineConfig } from '@bemedev/rollup-config';
import json from '@rollup/plugin-json';

export default defineConfig({
  declarationMap: true,
  ignoresJS: ['**/*.example.ts', '**/types.ts'],
  sourcemap: true,
  plugins: [
    'alias',
    'typescript',
    json(),
    'tsPaths',
    'circulars',
    'externals',
    'clean',
  ],
});
