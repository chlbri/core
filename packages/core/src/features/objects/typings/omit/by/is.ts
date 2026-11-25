import type { NotSubType } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) => {
  // oxlint-disable-next-line no-unused-vars
  const _out = <U>(_?: U) =>
    _unknown<U extends NotSubType<T, K[number]> ? true : false>();
  return _out;
};

export default fn;
