import { buildWatcher } from './helpers';

buildWatcher({
  excludePatterns: ['scripts/**'],
  watch: false,
  verbose: true,
});
