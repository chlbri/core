import { typeFn } from '#utils/typeFn';

/**
 * Base type-level helper for the `number` type.
 *
 * Built with {@linkcode typeFn}, which provides the `forceCast`, `dynamic`,
 * `is` and `type` utilities. Serves as the main function of the aggregated
 * {@linkcode typings} helper.
 */
const fn = typeFn<number>()();

export default fn;
