/* eslint-disable @typescript-eslint/no-unused-vars */

import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<AnyArray<T>>();

export default fn;
