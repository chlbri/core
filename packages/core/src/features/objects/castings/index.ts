import { castFn } from '#utils/castFn';

/**
 * Identity cast for `object` values.
 *
 * Built with {@linkcode castFn}, so in addition to returning its argument typed
 * as `object` it exposes the `forceCast` and `dynamic` helpers. Acts as the base
 * of the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = castFn<object>()();

export default fn;
