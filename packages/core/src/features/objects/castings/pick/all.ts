import { expandFn } from '#utils/expandFn';
import by from './by';
import deep from './deep/all';
import _index from './index';

/**
 * Aggregate `pick` helper.
 *
 * The callable base keeps entries whose keys are listed, and the helper is
 * extended with the `deep` and `by` members. Together they cover key-based,
 * value-based and deep selection.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { deep, by });

export default fn;
