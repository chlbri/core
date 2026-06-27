import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, const U extends NonN<T>>(value: T, defaultValue: U) => {
  const out = value === undefined || value === null ? defaultValue : value;
  return _unknown<Defaulted<T, U>>(out);
};

export default fn;
