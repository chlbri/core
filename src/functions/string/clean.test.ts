import { generateTests } from '../../test';
import { isClean } from './clean';

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
