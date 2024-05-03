import { createTests } from '@bemedev/vitest-extended';
import { isClean } from './clean';

const useTests = createTests(isClean);

useTests(
  ['hfjg@', ['hfjg@'], false],
  ['TEedfcxJF56ERT', ['TEedfcxJF56ERT'], true],
  ['3', ['3'], true],
  ['false<<>@', ['false<<>@'], false],
  ['#*', ['#*'], false],
  ['fdkfghfghv', ['fdkfghfghv'], true],
  ['GUYCVCCZ', ['GUYCVCCZ'], true],
);
