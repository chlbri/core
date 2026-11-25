import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends AnyArray>(..._: T) => _unknown<T[number][]>();

export default fn;
