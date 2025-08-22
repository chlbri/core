import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import _index from './index';
import is from './is';
import not from './not/all';

const fn = expandFn(_index, {
  deep,
  not,
  is,
});

export default fn;
