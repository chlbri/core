/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
