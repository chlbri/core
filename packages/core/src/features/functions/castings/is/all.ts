import { expandFn } from '#utils/expandFn';
import _index from './index';
import strict from './strict';

const is = expandFn(_index, {
  strict,
});

export default is;
