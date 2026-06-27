import { _unknown } from '#utils/_unknown';

const fn = <const T extends string>(value: T) => {
  const out = value.length;
  return _unknown<T['length']>(out);
};

export default fn;
