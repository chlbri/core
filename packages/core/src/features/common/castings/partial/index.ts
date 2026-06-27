import { _unknown } from '#utils/_unknown';

const fn = <T>(value: T) => {
  return _unknown<Partial<T>>(value);
};

export default fn;
