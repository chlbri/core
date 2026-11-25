import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends RuA>(..._: T) => _unknown<ReverseArray<T>>();

export default fn;
