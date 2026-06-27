import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

const fn = expandFn(_index, {
  deep,
});

export default fn;
