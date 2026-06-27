import { expandFn } from '#utils/expandFn';
import notReadonly from './index';
import is from './is';

const fn = expandFn(notReadonly, {
  is,
});

export default fn;
