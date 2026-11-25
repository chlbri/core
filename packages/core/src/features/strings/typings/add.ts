import type { AddString } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Wraps a value type between a prefix and a suffix at the type level.
 *
 * Accepts the value `T` and the optional `Before` and `After` strings so their
 * literal types can be captured, then yields type {@linkcode AddString}. No
 * runtime value is produced. Exposed as `add` on the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Value type whose string form is wrapped.
 * @template Before - Prefix type, defaulting to `''` when omitted.
 * @template After - Suffix type, defaulting to `''` when omitted.
 * @param _ - Value whose type is wrapped; ignored at runtime.
 * @param __ - Optional prefix type.
 * @param ___ - Optional suffix type.
 * @returns The wrapped string literal type; the runtime value is `undefined`.
 */
const fn = <T extends string, Before extends string, After extends string>(
  // oxlint-disable-next-line no-unused-vars
  _?: T,
  __?: Before,
  ___?: After,
) => _unknown<AddString<T, Before, After>>();

export default fn;
