import { generateTests } from './config';
import { isArray } from '../src/functions/array';

generateTests(
  isArray,
  [[1], [2], [[3, 4]], ['true'], [false]],
  [false, false, true, false, false],
);
