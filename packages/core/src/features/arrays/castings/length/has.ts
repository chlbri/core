import type { TupleOf } from '#types';
import is from '../is';

const fn = <T extends number>(check: T) => {
  const _out = (value: unknown): value is TupleOf<unknown, T> => {
    return is(value) && value.length === check;
  };

  return _out;
};

export default fn;
