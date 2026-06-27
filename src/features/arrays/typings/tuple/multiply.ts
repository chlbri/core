/* eslint-disable @typescript-eslint/no-unused-vars */

import type { TupleOf } from '#types';
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

const fn = expandFn(
  <const T, N extends number>(_?: T, __?: N) => _unknown<TupleOf<T, N>>(),
  {
    is: <const U, N extends number>(_?: U, __?: N) => {
      const _out = <T>(_?: T) =>
        _unknown<T extends TupleOf<U, N> ? true : false>();
      return _out;
    },
  },
);

export default fn;
