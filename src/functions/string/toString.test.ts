import { generateTests } from '../../test';
import { toString } from './toString';

generateTests(
  toString,
  [[1], [2], [3, 4], ['true'], [false]],
  [['1'], ['2'], ['3', '4'], ['true'], ['false']],
);
