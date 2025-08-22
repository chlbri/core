import { _unknown } from '#utils/_unknown';

const fn = <T>(value: unknown) => {
  return _unknown<T[]>(value);
};

export default fn;
