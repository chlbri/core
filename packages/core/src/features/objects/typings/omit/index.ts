import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Removes the keys listed in `K` from `T`.
 *
 * `K` accepts any key type permitted by type {@linkcode Keys} (`string`,
 * `number` or `symbol`), and the result is the native `Omit<T, K[number]>`
 * type. This is the direct typing form; the sibling `is` helper exposes the
 * predicate form. The helper evaluates to `undefined` at runtime.
 *
 * @template T - Type to remove keys from.
 * @template K - Key names to remove, captured as a tuple.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Keys to remove.
 * @returns `undefined`, typed as `Omit<T, K[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T, K extends Keys[]>(_?: T, ...__: K) => _unknown<Omit<T, K[number]>>();

export default fn;
