import type { JoinString } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Joins string values with a separator at the type level.
 *
 * Accepts the separator `sep` and any number of string values, then yields type
 * {@linkcode JoinString} for the captured tuple. No runtime join is performed.
 * Exposed as `join` on the aggregated {@linkcode typings} helper.
 *
 * @template T - Tuple of string values to join.
 * @template sep - Separator type, defaulting to a single space.
 * @param _ - Separator whose type is used; ignored at runtime.
 * @param __ - Values whose types are joined; ignored at runtime.
 * @returns The joined string literal type; the runtime value is `undefined`.
 */
const fn = <T extends readonly string[], sep extends string = ' '>(
  // oxlint-disable-next-line no-unused-vars
  _?: sep,
  ...__: T
) => _unknown<JoinString<T, sep>>();

export default fn;
