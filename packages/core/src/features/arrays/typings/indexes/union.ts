import type { IndexesOfArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(..._: T) => _unknown<IndexesOfArray<T>>();

export default fn;
