import { castFn } from '#utils/castFn';

/**
 * Identity cast for `string` values.
 *
 * Created by the base cast factory without extensions, so it returns its
 * argument unchanged and exposes the `forceCast` and `dynamic` helpers. Also
 * serves as the base of the aggregated `castings` helper.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<string>()();

export default fn;
