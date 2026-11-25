import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T extends RuA>(..._: T) => _unknown<Readonly<T>>();

export default fn;
