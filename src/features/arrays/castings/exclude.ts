import type { ExcludeArray } from '#types';
import { _unknown } from '#utils/_unknown';

const exclude = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...excludes: Ex
) => {
  const out = array.filter(item => !excludes.includes(item));
  return _unknown<ExcludeArray<T, Ex[number]>>(out);
};

export default exclude;
