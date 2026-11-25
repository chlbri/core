import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T, K extends Keys[]>(_?: T, ...__: K) => _unknown<Omit<T, K[number]>>();

export default fn;
