import { _unknown } from '#utils/_unknown';

const fn = <T>(value: T | readonly [T] | [T]) => {
  const out = Array.isArray(value) ? value[0] : value;
  return _unknown<T>(out);
};

export default fn;
