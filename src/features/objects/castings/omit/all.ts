import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _const from './const/all';
import deep from './deep/all';
import _index from './index';
import is from './is';
import strict from './strict/all';

const fn = expandFn(_index, {
  strict,
  const: _const,
  is,
  by,
  deep,
});

export default fn;
