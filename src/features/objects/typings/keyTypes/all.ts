import type { KeyTypes } from '#types';
import { typeFn } from '#utils/typeFn';
import from from './from';
import _index from './index';

const fn = typeFn<KeyTypes>()({
  is: _index,
  from,
});

export default fn;
