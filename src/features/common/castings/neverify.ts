import type { Neverify } from '#types';
import _unknown from './_unknown';

const fn = <T>(value: T) => {
  return _unknown<Neverify<T>>(value);
};

export default fn;
