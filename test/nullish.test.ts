import { isNullish } from '../src/functions/nullish';
import { generateTests } from './config';

generateTests(
  isNullish,
  [[undefined], ['e'], [null], [7]] as [any, any, any, any],
  [true, false, true, false],
);
