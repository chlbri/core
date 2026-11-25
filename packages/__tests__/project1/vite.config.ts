import { defineConfig } from 'vite-plus';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  // Inline dev-utils: it nests its own vitest copy, breaking test collection

  test: {
    bail: 35,
    maxConcurrency: 10,
    passWithNoTests: true,
    slowTestThreshold: 3000,
    globals: true,
    logHeapUsage: true,
    name: 'project1',
    env: { NODE_ENV: 'test' },
    typecheck: { enabled: true, ignoreSourceErrors: true },
    server: { deps: { inline: ['@bemedev/dev-utils'] } },
  },
});
