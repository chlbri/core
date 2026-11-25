import { defineConfig as pack } from '@bemedev/dev-utils/pack';
import { defineConfig } from 'vite-plus';

/**
 * Building the `pack` block reads the tsconfig of `process.cwd()` and walks
 * every directory under it. Vitest loads this config from the workspace root
 * for every run, which scans the whole package for nothing: tests never read
 * `pack`. So it is only built outside the test mode.
 */
const buildPack = () =>
  pack.bemedev({ clean: true, ignoresJS: ['**/*.example.ts'] });

export default defineConfig(({ mode }) => ({
  ...(mode !== 'test' && { pack: buildPack() }),

  resolve: { tsconfigPaths: true },

  test: {
    bail: 35,
    maxConcurrency: 10,
    passWithNoTests: true,
    slowTestThreshold: 3000,
    globals: true,
    logHeapUsage: true,
    name: '@bemedev/core',
    env: { NODE_ENV: 'test' },
    typecheck: { enabled: true, ignoreSourceErrors: true },
    /*
     * Inline dev-utils: it imports `vitest` from its own location, which
     * resolves to the workspace-root copy when the suite is run from the root,
     * breaking test collection.
     */
    server: { deps: { inline: ['@bemedev/dev-utils'] } },
  },

  run: {
    tasks: {
      pack: {
        command: 'vp pack',
        dependsOn: ['codegen'],

        cache: {
          input: [
            'src/**',
            'package.json',
            'tsconfig.json',
            'vite.config.ts',
            '!**/*.test.ts',
            '!**/*.test-d.ts',
            '!**/*.gen.ts',
          ],

          output: ['lib/**', '!**/.DS_Store'],
        },
      },

      codegen: {
        command: 'vp exec codebase -x "src/**/*.test-d.ts" -x "src/scripts/**/*"',

        cache: { input: ['src/**', '!**/*.test-d.ts'], output: ['.codebase.json'] },
      },
    },
  },
}));
