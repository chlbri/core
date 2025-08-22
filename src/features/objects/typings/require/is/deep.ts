/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepRequired<T> ? true : false>();

export default fn;
