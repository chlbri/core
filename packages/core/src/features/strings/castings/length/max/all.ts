import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';
import orEqual from './orEqual/all';

const maxAllLength = expandFn(strict, {
  is,
  low,
  strict,
  orEqual,
});

export default maxAllLength;
