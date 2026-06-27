import type { SoA } from '#types';
import { expandFn } from '#utils/expandFn';

type ToArray_F = {
  <T>(obj?: SoA<unknown>): T[];
  typed: <T>(obj: SoA<T>) => Exclude<T, undefined>[];
};

const _toArray = (value?: unknown) => {
  if (!value) return [];
  const checkArray = Array.isArray(value);
  const out = checkArray ? value : [value];

  return out;
};

const toArray: ToArray_F = expandFn(_toArray, {
  typed: _toArray,
});

export default toArray;
