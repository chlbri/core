/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ReduceDeepArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<ReduceDeepArray<T>>();

export default fn;
