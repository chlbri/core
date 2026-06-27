import { exclude } from '@bemedev/dev-utils/vitest-exclude';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [exclude({ ignoreCoverageFiles: ['**/index.ts'] })],
  test: {
    bail: 35,
    maxConcurrency: 10,
    passWithNoTests: true,
    slowTestThreshold: 3000,
    globals: true,
    logHeapUsage: true,
    typecheck: {
      enabled: true,
      ignoreSourceErrors: true,
    },
    coverage: {
      enabled: true,
      reportsDirectory: '.coverage',
      provider: 'v8',
    },
  },
});
