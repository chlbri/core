import type { NotUndefined } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(value: T) => {
  return _unknown<NotUndefined<T>>(value);
};

export default fn;
