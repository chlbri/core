import { expandFn } from '#utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import ZERO from './ZERO';

export const typings = expandFn(_index, {
  getString,
  digit,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});
