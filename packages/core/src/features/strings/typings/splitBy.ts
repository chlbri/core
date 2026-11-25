import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const S extends string, By extends string = '.'>(_?: S, __?: By) =>
  _unknown<SplitStringBy<S, By>>();

export default fn;
