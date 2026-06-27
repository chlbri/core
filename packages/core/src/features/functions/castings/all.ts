import { expandFn } from '#utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is/all';

const castings = expandFn(_index, {
  is,
  forceCast,
  dynamic,
  checker,
});

export default castings;
