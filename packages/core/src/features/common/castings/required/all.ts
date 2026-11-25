import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * Aggregated runtime helpers for required casts.
 *
 * Extends the base cast from `./index`, which removes `undefined`, through
 * {@linkcode expandFn} with `deep`, which recursively removes optional
 * modifiers and `undefined`. Exposed as `required` on the aggregated
 * {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep });

export default fn;
