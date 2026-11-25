import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper restricted to the `bigint` type.
 *
 * Built with {@linkcode typeFn}, which adds the `forceCast`, `dynamic`, `is`
 * and `type` utilities. Exposed as `bigint` on the aggregated
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<bigint>()();

export default fn;
