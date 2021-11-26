import { generateTests } from '../config';
import { toString } from '../../src/functions/string/toString';

generateTests(
  toString,
  [[1], [2], [3, 4], ['true'], [false]],
  [['1'], ['2'], ['3', '4'], ['true'], ['false']],
);
