import { expandFn } from '#utils/expandFn';
import _const from './const/all';
import _index from './index';
import is from './is';

const fn = expandFn(_index, {
  is,
  const: _const,
});

export default fn;
