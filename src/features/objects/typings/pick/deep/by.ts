/* eslint-disable @typescript-eslint/no-unused-vars */

import type { SubType } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<SubType<T, K[number]>>();

export default fn;
