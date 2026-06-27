import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import multiply from './multiply';

const fn = expandFn(_index, {
  number: multiply,
  is,
});

export default fn;
