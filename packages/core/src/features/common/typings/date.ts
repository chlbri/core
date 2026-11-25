import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for `Date`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Date>()();

export default fn;
