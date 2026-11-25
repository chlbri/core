import { _unknown } from '#utils/_unknown';

/**
 * Casts to `Readonly<T>` without inferring `T` from the argument.
 *
 * Because the argument is typed as `unknown`, `T` must be supplied explicitly,
 * which forces the readonly conversion on the chosen type. The helper evaluates
 * to `undefined` at runtime.
 *
 * @template T - Object type to convert to readonly.
 * @param _ - Ignored value; does not participate in inference.
 * @returns `undefined`, typed as `Readonly<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;
