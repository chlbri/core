/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepReadonly<T> ? true : false>();

export default fn;
