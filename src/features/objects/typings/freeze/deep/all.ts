import { expandFn } from '#utils/expandFn';
import deepFreeze from './index';
import not from './not';

const deep = expandFn(deepFreeze, {
  not,
});

export default deep;
