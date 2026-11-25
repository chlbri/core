import type { Ru } from '#types';
import { castFn } from '#utils/castFn';

/**
 * Identity cast restricted to open records with `unknown` values.
 *
 * Built with {@linkcode castFn}, so it also exposes the `forceCast` and
 * `dynamic` helpers.
 *
 * @see -- type {@linkcode Ru}
 */
const fn = castFn<Ru>()();

export default fn;
