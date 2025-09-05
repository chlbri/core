import { defineConfig } from '@bemedev/rollup-config';
import json from '@rollup/plugin-json';

export default defineConfig.bemedev({
  declarationMap: true,
  ignoresJS: ['**/*.example.ts'],
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
