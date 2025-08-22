import type { NonN } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, U extends NonN<T>>(value: T, defaultValue: U) => {
  const out = value === undefined || value === null ? defaultValue : value;
  return _unknown<NonN<T>>(out);
};

export default fn;
