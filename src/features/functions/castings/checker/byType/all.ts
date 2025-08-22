import { expandFn } from '#utils/expandFn';
import cast from './cast';
import _index from './index';

const fn = expandFn(_index, {
  cast,
});

export default fn;
