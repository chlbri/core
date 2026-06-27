import type { IndexesOfArray, RuA, UnionToTuple } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(...array: T) => {
  const out = array.map((_, index) => index);
  return _unknown<UnionToTuple<IndexesOfArray<T>>>(out);
};

export default fn;
