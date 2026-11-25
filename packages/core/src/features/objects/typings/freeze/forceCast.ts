import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper forcing any value's type into `Readonly<T>`.
 *
 * Takes the target object type `T` as an explicit type argument and yields
 * `Readonly<T>` regardless of the argument's actual type. Exposed as
 * `forceCast` on the `freeze` member of the aggregated {@linkcode typings}
 * helper.
 *
 * @template T - Object type exposed in its readonly form.
 * @param _ - Value ignored by the cast.
 * @returns The type `Readonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;
