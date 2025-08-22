/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const byType = <T>(_?: Checker2<T>) => _unknown<Checker2<T>>();

export default byType;
