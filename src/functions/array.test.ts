import { generateTests } from '../test/functions';
import { isArray } from './array';

generateTests(
  isArray,
  [[1], [2], [[3, 4]], ['true'], [false]],
  [false, false, true, false, false],
);
