import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T>(_?: T) => _unknown<T extends RuA ? true : false>();

export default fn;
