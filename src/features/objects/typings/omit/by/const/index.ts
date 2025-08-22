/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NotSubType, ValuesOf } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object, K extends ValuesOf<T>[]>(
  _?: T,
  ...__: K
) => _unknown<NotSubType<T, K[number]>>();

export default fn;
