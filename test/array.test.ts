import { isArray } from '../src/functions/array';
import { generateTests } from './config';

generateTests(
  isArray,
  [[1], [2], [[3, 4]], ['true'], [false]],
  [false, false, true, false, false],
);
