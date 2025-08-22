/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, U extends NonN<T>>(_?: T, __?: U) =>
  _unknown<Defaulted<T, U>>();

export default fn;
