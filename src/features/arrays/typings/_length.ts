/* eslint-disable @typescript-eslint/no-unused-vars */

import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(_?: T) => _unknown<T['length']>();

export default fn;
