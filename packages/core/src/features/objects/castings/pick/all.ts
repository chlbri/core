import { expandFn } from '#utils/expandFn';
import by from './by';
import deep from './deep/all';
import _index from './index';

const fn = expandFn(_index, {
  deep,
  by,
});

export default fn;
