import { expandFn } from '#utils/expandFn';
import byType from './byType/all';
import _index from './index';

const fn = expandFn(_index, {
  byType,
});

export default fn;
