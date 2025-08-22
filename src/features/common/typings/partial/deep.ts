/* eslint-disable @typescript-eslint/no-unused-vars */

import type { DeepPartial } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepPartial<T>>();

export default fn;
