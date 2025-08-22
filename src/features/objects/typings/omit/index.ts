/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<Omit<T, K[number]>>();

export default fn;
