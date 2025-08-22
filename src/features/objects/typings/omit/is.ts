/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, K extends Keys[]>(_?: T, ...__: K) => {
  const _out = <U>(_?: U) =>
    _unknown<U extends Omit<T, K[number]> ? true : false>();

  return _out;
};

export default fn;
