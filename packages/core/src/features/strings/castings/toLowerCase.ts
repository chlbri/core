import { _unknown } from '#utils/_unknown';

const fn = <T extends string>(value: T) => {
  const out = value.toLowerCase();
  return _unknown<Lowercase<T>>(out);
};

export default fn;
