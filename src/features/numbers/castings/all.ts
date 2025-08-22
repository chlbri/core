import { expandFn } from '#utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import is from './is';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import type from './type';
import ZERO from './ZERO';

export const castings = expandFn(_index, {
  is,
  getString,
  digit,
  type,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});
