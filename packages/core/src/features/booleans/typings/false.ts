import { typeFn } from '#utils/typeFn';

/**
 * Typing helper restricted to the literal `false` value.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers. Exposed as `false` on the aggregated {@linkcode typings}
 * helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<false>()();

export default fn;
