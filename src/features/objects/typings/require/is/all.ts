import { expandFn } from '#utils/expandFn';
import deep from './deep';
import requireIs from './index';

const is = expandFn(requireIs, {
  deep,
});

export default is;
