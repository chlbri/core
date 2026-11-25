import { typeFn } from '#utils/typeFn';

/**
 * Base type-level helper for `unknown`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers, and used as the starting point of the aggregated helpers in
 * `./all`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<unknown>()();

export default fn;
