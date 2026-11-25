import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level check that detects tuples and readonly arrays.
 *
 * Computes whether `T` extends `RuA`, i.e. `readonly unknown[]`. Unlike the
 * `is` member of the aggregated helper, readonly arrays and readonly tuples
 * are matched too. Exposed as `is` on the `tuple` member of the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The type `true` when `T` extends `RuA`, otherwise the type `false`;
 * the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T>(_?: T) => _unknown<T extends RuA ? true : false>();

export default fn;
