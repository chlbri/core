import { expandFn } from '#utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

const fn = expandFn(deepReadonly, {
  not,
  is,
});

export default fn;
