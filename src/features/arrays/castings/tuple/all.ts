import { expandFn } from '#utils/expandFn';
import is from '../is';
import _index from './index';
import multiply from './multiply';
import permutations from './permutations/all';

const fn = expandFn(_index, {
  multiply,
  is,
  permutations,
});

export default fn;
