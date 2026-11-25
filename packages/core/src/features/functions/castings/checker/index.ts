import type { Checker } from '#types';
import { castFn } from '#utils/castFn';

/**
 * Identity cast for `Checker`.
 *
 * Built with {@linkcode castFn}, which adds `forceCast` and `dynamic`.
 */
const fn = castFn<Checker>()();

export default fn;
