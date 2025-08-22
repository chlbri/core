/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;
