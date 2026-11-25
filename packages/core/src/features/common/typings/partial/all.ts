import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * Aggregated type-level `partial` helper.
 *
 * Uses {@linkcode expandFn} to extend the shallow optional transform from
 * `./index` with:
 * - `deep`: recursively makes nested properties optional.
 *
 * Exposed as `partial` on the aggregated common {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep });

export default fn;
