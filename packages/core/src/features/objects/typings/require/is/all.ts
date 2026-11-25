import { expandFn } from '#utils/expandFn';
import deep from './deep';
import requireIs from './index';

/**
 * Aggregated type-level guards for required object properties.
 *
 * Uses {@linkcode expandFn} to extend the shallow check from `./index` with:
 * - `deep`: checks that nested object properties are required as well.
 *
 * Exposed as `is` on the `require` member of the aggregated
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const is = expandFn(requireIs, { deep });

export default is;
