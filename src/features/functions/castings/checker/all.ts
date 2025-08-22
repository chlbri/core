import { expandFn } from '#utils/expandFn';
import byType from './byType/all';
import forceCast from './forceCast';
import _index from './index';
import is from './is';

const checker = expandFn(_index, {
  forceCast,
  byType,
  is,
});

export default checker;
