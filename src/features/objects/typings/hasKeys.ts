/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<K[number] extends keyof T ? true : false>();

export default fn;
