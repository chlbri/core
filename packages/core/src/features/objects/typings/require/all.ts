import { expandFn } from '#utils/expandFn';
import const_ from './const';
import require from './index';
import is from './is/all';
import strict from './strict';

const requireTyping = expandFn(require, {
  const: const_,
  strict,
  is,
});

export default requireTyping;
