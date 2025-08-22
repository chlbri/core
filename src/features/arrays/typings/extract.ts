/* eslint-disable @typescript-eslint/no-unused-vars */

import type { AnyArray, ExtractArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends AnyArray, const U extends T[number][]>(
  _?: T,
  ...__: U
) => _unknown<ExtractArray<T, U[number]>>();

export default fn;
