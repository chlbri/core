import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper intersecting two object types with literal capture.
 *
 * Variant of the base intersection helper that declares both type parameters
 * as `const`, so object literals passed as arguments keep their literal key and
 * value types instead of being widened. Exposed as `const` on the `require`
 * member of the aggregated {@linkcode typings} helper.
 *
 * @template T - First object type of the intersection.
 * @template R - Second object type of the intersection.
 * @param _ - First object type carrier; ignored at runtime.
 * @param __ - Second object type carrier; ignored at runtime.
 * @returns The type `T & R`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object, const R extends object>(_?: T, __?: R) =>
  _unknown<T & R>();

export default fn;
