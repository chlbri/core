import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * Aggregated required-state guards.
 *
 * Extends the shallow guard from `./index` through {@linkcode expandFn} with
 * `deep`, which checks nested values recursively. Exposed as `is` on the
 * aggregated `require` helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep });

export default fn;
