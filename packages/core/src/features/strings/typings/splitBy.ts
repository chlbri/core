import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Splits a string literal on a separator at the type level.
 *
 * Accepts the string `S` and the optional separator `By`, then yields type
 * {@linkcode SplitStringBy}. No runtime split is performed. Exposed as
 * `splitBy` on the aggregated {@linkcode typings} helper.
 *
 * @template S - String literal to split.
 * @template By - Separator type, defaulting to `.`.
 * @param _ - String whose type is split; ignored at runtime.
 * @param __ - Separator whose type is used; ignored at runtime.
 * @returns The tuple of split parts; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const S extends string, By extends string = '.'>(_?: S, __?: By) =>
  _unknown<SplitStringBy<S, By>>();

export default fn;
