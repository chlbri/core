import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T, U extends NonN<T>>(_?: T, __?: U) => _unknown<Defaulted<T, U>>();

export default fn;
