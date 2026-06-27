import { expandFn } from '#utils/expandFn';
import deep from './deep';
import required from './index';
import is from './is';

const fn = expandFn(required, {
  deep,
  is,
});

export default fn;
