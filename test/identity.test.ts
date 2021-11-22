import { generateTests } from '../src/test';
import { identity } from '../src/functions/identity';

generateTests(
  identity,
  [[1], [2], [3], [4], ['true'], [false]],
  [1, 2, 3, 4, 'true', false],
);
