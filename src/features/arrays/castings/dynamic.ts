import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends AnyArray>(value: T) => {
  return _unknown<T>(value);
};

export default fn;
