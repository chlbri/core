import type { Letters } from '#types';
import { typeFn } from '#utils/typeFn';
import lower from './lower';
import upper from './upper';

const fn = typeFn<Letters>()({
  lower,
  upper,
});

export default fn;
