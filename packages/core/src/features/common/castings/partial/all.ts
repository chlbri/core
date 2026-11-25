import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * Aggregated runtime helpers for partial casts.
 *
 * Extends the shallow partial cast from `./index` through {@linkcode expandFn}
 * with `deep`, which recursively makes nested properties optional. Exposed as
 * `partial` on the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep });

export default fn;
