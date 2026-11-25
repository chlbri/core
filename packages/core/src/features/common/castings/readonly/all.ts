import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import _index from './index';
import not from './not';

/**
 * Aggregated runtime helpers for readonly casts.
 *
 * Extends the shallow readonly cast from `./index` through {@linkcode expandFn}
 * with:
 * - `deep`: recursive readonly helpers, including their own `not` variant;
 * - `not`: shallow cast removing the `readonly` modifier.
 *
 * Exposed as `readonly` on the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep, not });

export default fn;
