import { expandFn } from '#utils/expandFn';
import _index from './index';
import not from './not';

/**
 * Aggregated runtime helpers for recursive readonly casts.
 *
 * Extends the deep readonly cast from `./index` through {@linkcode expandFn}
 * with `not`, which recursively removes the `readonly` modifier. Exposed as
 * `deep` on the aggregated `readonly` helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { not });

export default fn;
