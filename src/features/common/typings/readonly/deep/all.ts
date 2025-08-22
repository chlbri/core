import { expandFn } from '#utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

const deep = expandFn(deepReadonly, {
  not,
  is,
});

export default deep;
