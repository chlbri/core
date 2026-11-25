import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: Checker) => _unknown<Checker2<T>>();

export default fn;
