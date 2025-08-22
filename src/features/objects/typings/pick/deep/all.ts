import { expandFn } from '#utils/expandFn';
import by from './by';
import deepPick from './index';

const deep = expandFn(deepPick, {
  by,
});

export default deep;
