import { typeFn } from '#utils/typeFn';

/**
 * Typing helper restricted to the literal `true` value.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers. Exposed as `true` on the aggregated {@linkcode typings}
 * helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<true>()();

export default fn;
