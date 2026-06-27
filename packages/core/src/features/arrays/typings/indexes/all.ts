import { expandFn } from '#utils/expandFn';
import _index from './index';
import union from './union';

const fn = expandFn(_index, {
  union,
});

export default fn;
