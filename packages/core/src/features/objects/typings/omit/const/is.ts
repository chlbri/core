import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T, K extends (keyof T)[]>(_?: T, ...__: K) => {
  // oxlint-disable-next-line no-unused-vars
  const _out = <U>(_?: U) => _unknown<U extends Omit<T, K[number]> ? true : false>();

  return _out;
};

export default fn;
