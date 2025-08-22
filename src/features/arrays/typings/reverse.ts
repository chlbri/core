/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends RuA>(..._: T) => _unknown<ReverseArray<T>>();

export default fn;
