import { expandFn } from '#utils/expandFn';
import by from './by';
import _index from './index';

const fn = expandFn(_index, {
  by,
});

export default fn;
