/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
