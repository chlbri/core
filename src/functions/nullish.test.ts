import { generateTests } from '../test';
import { isNullish } from './nullish';

generateTests(
  isNullish,
  [[undefined], ['e'], [null], [7]] as [any, any, any, any],
  [true, false, true, false],
);
