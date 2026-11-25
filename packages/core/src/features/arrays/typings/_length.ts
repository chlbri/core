import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Base type-level helper extracting the length of a tuple.
 *
 * Yields the literal type `T['length']`, preserving the exact numeric length
 * of the tuple instead of widening it to `number`. Base implementation of the
 * `_length` member of the aggregated {@linkcode typings} helper.
 *
 * @template T - Tuple type whose length is extracted.
 * @param _ - Tuple type carrier; ignored at runtime.
 * @returns The literal type `T['length']`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends RuA>(_?: T) => _unknown<T['length']>();

export default fn;
