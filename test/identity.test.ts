import { identity } from '../src/functions/identity';
import { generateTests } from './config';

generateTests(
  identity,
  [[1], [2], [3], [4], ['true'], [false]],
  [1, 2, 3, 4, 'true', false],
);
