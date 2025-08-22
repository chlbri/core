import { expandFn } from '#utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';

export const typings = expandFn(_index, {
  dynamic,
  forceCast,
  checker,
});
