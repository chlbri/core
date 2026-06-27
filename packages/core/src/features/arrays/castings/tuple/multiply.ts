import type { TupleOf } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T, N extends number>(data: T, times: N) => {
  const out = Array.from({ length: times }, () => data);
  return _unknown<TupleOf<T, N>>(out);
};

export default fn;
