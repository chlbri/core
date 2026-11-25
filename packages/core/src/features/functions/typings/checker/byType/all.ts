import { expandFn } from '#utils/expandFn';
import cast from './cast';
import _index from './index';

/**
 * Aggregated type-level helpers for typed checkers.
 *
 * Extends the base `byType` helper with `cast`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { cast });

export default fn;
