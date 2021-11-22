import { generateTests } from '../src/test';
import { isNullish } from '../src/functions/nullish';

generateTests(
  isNullish,
  [[undefined], ['e'], [null], [7]] as [any, any, any, any],
  [true, false, true, false],
);
