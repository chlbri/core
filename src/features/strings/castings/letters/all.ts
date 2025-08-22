import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import lower from './lower';
import upper from './upper';

const fn = expandFn(_index, {
  lower,
  upper,
  is,
});

export default fn;
