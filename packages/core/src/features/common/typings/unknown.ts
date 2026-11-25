import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for `unknown`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers, and exposed as the `unknown` member of the aggregated helpers
 * in `./all`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<unknown>()();

export default fn;
