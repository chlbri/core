import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _index from './index';
import is from './is';

const fn = expandFn(_index, {
  by,
  is,
});

export default fn;
