/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Equals, Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<Equals<K[number], keyof T>>();

export default fn;
