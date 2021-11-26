import { generateTests } from '../config';
import { isClean } from '../../src/functions/string/clean';

generateTests(
  isClean,
  [
    ['hfjg@'],
    ['TEedfcxJF56ERT'],
    ['3'],
    ['false<<>'],
    ['#*'],
    ['fdkfghfghv'],
    ['GUYCVCCZ'],
  ],
  [false, true, true, false, false, true, true],
);
