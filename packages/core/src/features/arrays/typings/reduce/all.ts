import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * Aggregated type-level helpers for reducing arrays.
 *
 * Uses {@linkcode expandFn} to extend the base element-type function with:
 * - `deep`: unwraps nested arrays down to the deepest element type.
 *
 * Exposed as `reduce` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep });

export default fn;
