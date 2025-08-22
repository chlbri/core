import type { ExtractArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...extractors: Ex
) => {
  const out = array.filter(item => extractors.includes(item));
  return _unknown<ExtractArray<T, Ex[number]>>(out);
};

export default fn;
