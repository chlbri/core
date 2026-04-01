import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';

const exclusiveRangeAllLength = expandFn(strict, {
  is,
  low,
  strict,
});

export default exclusiveRangeAllLength;
