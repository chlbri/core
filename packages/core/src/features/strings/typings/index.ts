import { typeFn } from '#utils/typeFn';

/**
 * Base type-level helper for the `string` type.
 *
 * Built with {@linkcode typeFn}, which adds the `forceCast`, `dynamic`, `is`
 * and `type` utilities. Serves as the main function of the aggregated
 * {@linkcode typings} helper.
 */
const fn = typeFn<string>()();

export default fn;
