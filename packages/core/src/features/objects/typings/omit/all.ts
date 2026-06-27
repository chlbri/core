import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _const from './const/all';
import _index from './index';
import is from './is';

const fn = expandFn(_index, {
  const: _const,
  is,
  by,
});

export default fn;
