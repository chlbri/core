/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: Checker) => _unknown<Checker2<T>>();

export default fn;
