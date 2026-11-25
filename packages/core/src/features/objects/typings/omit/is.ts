import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T, K extends Keys[]>(_?: T, ...__: K) => {
  // oxlint-disable-next-line no-unused-vars
  const _out = <U>(_?: U) => _unknown<U extends Omit<T, K[number]> ? true : false>();

  return _out;
};

export default fn;
