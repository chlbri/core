import type { Ra } from '#types';
import { castFn } from '#utils/castFn';

/**
 * Identity cast restricted to open records with `any` values.
 *
 * Built with {@linkcode castFn}, so it also exposes the `forceCast` and
 * `dynamic` helpers.
 *
 * @see -- type {@linkcode Ra}
 */
const fn = castFn<Ra>()();

export default fn;
