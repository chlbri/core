import { expandFn } from '#utils/expandFn';
import deepNotReadonly from './index';
import is from './is';

const fn = expandFn(deepNotReadonly, {
  is,
});

export default fn;
