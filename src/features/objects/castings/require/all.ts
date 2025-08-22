import { expandFn } from '#utils/expandFn';
import _const from './const';
import _index from './index';
import is from './is/all';
import strict from './strict';

const fn = expandFn(_index, {
  strict,
  const: _const,
  is,
});

export default fn;
