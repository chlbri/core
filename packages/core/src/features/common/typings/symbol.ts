import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for `symbol`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<symbol>()();

export default fn;
