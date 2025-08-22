import { expandFn } from '#utils/expandFn';
import _index from './index';
import lower from './lower';
import upper from './upper';

const fn = expandFn(_index, {
  lower,
  upper,
});

export default fn;
