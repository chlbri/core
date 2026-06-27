import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

const fn = expandFn(_index, {
  is,
});

export default fn;
