import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import object from './object/all';

const fn = expandFn(_index, {
  is,
  object,
});

export default fn;
