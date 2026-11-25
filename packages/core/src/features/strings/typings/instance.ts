import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for the `String` wrapper object type.
 *
 * Built with {@linkcode typeFn} over the boxed `String` type, which adds the
 * `forceCast`, `dynamic`, `is` and `type` utilities. Exposed as `instance` on
 * the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
const fn = typeFn<String>()();

export default fn;
