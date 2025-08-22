import type { ToArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(value: T) => {
  const checkArray = Array.isArray(value);
  const out = checkArray ? value : [value];

  return _unknown<ToArray<T>>(out);
};

export default fn;
