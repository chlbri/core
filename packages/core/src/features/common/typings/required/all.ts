import { expandFn } from '#utils/expandFn';
import deep from './deep';
import required from './index';
import is from './is';

/**
 * Aggregated type-level `required` helper.
 *
 * Uses {@linkcode expandFn} to extend the shallow required transform from
 * `./index` with:
 * - `deep`: recursively makes nested properties required;
 * - `is`: checks whether a type is neither `null` nor `undefined`.
 *
 * Exposed as `required` on the aggregated common {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(required, { deep, is });

export default fn;
