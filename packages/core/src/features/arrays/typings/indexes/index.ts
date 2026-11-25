import type { IndexesOfArray, RuA, UnionToTuple } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper listing the indexes of a tuple as a tuple of literals.
 *
 * Converts the union computed by type {@linkcode IndexesOfArray} with type
 * {@linkcode UnionToTuple}, yielding a tuple containing the literal indexes
 * of `T`, such as `0`, `1` and `2` for a three-element tuple. Main call
 * signature of the `indexes` member of the aggregated {@linkcode typings}
 * helper.
 *
 * @template T - Tuple type whose indexes are listed.
 * @param _ - Tuple type carrier; ignored at runtime.
 * @returns A tuple of the literal indexes of `T`; the runtime value is
 * `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends RuA>(..._: T) =>
  _unknown<UnionToTuple<IndexesOfArray<T>>>();

export default fn;
