import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for `any`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<any>()();

export default fn;
