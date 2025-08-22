import { expandFn } from '#utils/expandFn';
import _index from './index';
import not from './not';

const fn = expandFn(_index, {
  not,
});

export default fn;
