import { _unknown } from '#utils/_unknown';

const fn = <T extends string>(value: T) => {
  const out = value.toUpperCase();
  return _unknown<Uppercase<T>>(out);
};

export default fn;
