/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NotSubType } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<NotSubType<T, K[number]>>();

export default fn;
