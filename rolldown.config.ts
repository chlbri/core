import { defineConfig } from '@bemedev/dev-utils/rolldown';

export default defineConfig.bemedev({
  ignoresJS: ['**/*.example.ts', '**/types.ts', './example/**/*.ts'],
  excludesTS: ['./example/**/*.ts'],
  declarationMap: true,
  sourcemap: true,
});
