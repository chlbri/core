import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making an array or tuple readonly.
 *
 * Yields `Readonly<T>`, which adds the `readonly` modifier to the tuple
 * elements or to the array type. Exposed as `freeze` on the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Array or tuple type to freeze.
 * @param _ - Elements whose type is frozen; ignored at runtime.
 * @returns The type `Readonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends RuA>(..._: T) => _unknown<Readonly<T>>();

export default fn;
