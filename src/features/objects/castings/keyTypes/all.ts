import { expandFn } from '#utils/expandFn';
import from from './from';
import _index from './index';
import is from './is';

const fn = expandFn(_index, {
  from,
  is,
});

export default fn;
