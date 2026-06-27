import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object | undefined>(value: T) => {
  return _unknown<DeepRequired<T>>(value);
};

export default fn;
