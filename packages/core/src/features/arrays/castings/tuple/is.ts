import type { Checker2 } from '#types';
import is from '../is';

const fn = <const T>(fn: Checker2<T>) => {
  const _out = (value: unknown): value is Array<T> => {
    return is(value) && value.every(fn);
  };

  return _out;
};

export default fn;
