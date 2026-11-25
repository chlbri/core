import { expandFn } from '#utils/expandFn';
import cast from './cast';
import _index from './index';

/**
 * Aggregated checker-by-type helpers.
 *
 * Extends the base `byType` helper with `cast`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { cast });

export default fn;
