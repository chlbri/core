import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default fn;
