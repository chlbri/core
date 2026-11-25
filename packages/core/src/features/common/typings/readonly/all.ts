import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import _index from './index';
import is from './is';
import not from './not/all';

/**
 * Aggregated type-level `readonly` helper.
 *
 * Uses {@linkcode expandFn} to extend the shallow readonly transform from
 * `./index` with:
 * - `deep`: recursively makes nested properties readonly;
 * - `not`: the inverse transform, removing `readonly`;
 * - `is`: checks whether an object type is readonly.
 *
 * Exposed as `readonly` on the aggregated common {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { deep, not, is });

export default fn;
