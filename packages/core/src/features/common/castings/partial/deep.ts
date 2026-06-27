import type { DeepPartial } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(value: T) => {
  return _unknown<DeepPartial<T>>(value);
};

export default fn;
