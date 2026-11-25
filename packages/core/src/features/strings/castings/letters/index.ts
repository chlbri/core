import type { Letters } from '#types';
import { castFn } from '#utils/castFn';

/**
 * Base casting helper for English letters.
 *
 * Creates the identity letters cast through {@linkcode castFn}, which adds the
 * `forceCast` and `dynamic` utilities. Serves as the main function of the
 * `letters` helper of the aggregated {@linkcode castings} helper.
 */
const fn = castFn<Letters>()();

export default fn;
