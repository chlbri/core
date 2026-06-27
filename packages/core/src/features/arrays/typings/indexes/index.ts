import type { IndexesOfArray, RuA, UnionToTuple } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(..._: T) =>
  _unknown<UnionToTuple<IndexesOfArray<T>>>();

export default fn;
