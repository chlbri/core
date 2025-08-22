import { expandFn } from '#utils/expandFn';
import is from '../is';
import _index from './index';
import multiply from './multiply';

const fn = expandFn(_index, {
  multiply,
  is,
});

export default fn;
