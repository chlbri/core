import { buildWatcher } from './helpers';

buildWatcher({
  excludePatterns: ['scripts/**'],
  watch: true,
  verbose: true,
});
