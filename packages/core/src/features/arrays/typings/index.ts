import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends AnyArray>(..._: T) => _unknown<T[number][]>();

export default fn;
