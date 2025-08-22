import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import _index from './index';
import not from './not';

const fn = expandFn(_index, {
  deep,
  not,
});

export default fn;
