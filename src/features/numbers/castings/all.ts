import { castFn } from '#utils/castFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import is from './is';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import type from './type';
import ZERO from './ZERO';

export const castings = castFn<number>()({
  is,
  getString,
  digit,
  type,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});
