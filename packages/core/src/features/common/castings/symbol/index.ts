import { castFn } from '#utils/castFn';

/**
 * Identity cast for `symbol`.
 *
 * Built with {@linkcode castFn}, which returns the value unchanged and adds the
 * `forceCast` and `dynamic` helpers. No runtime validation is performed.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = castFn<symbol>()();

export default fn;
