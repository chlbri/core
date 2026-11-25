import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<AnyArray<T>>();

export default fn;
