import { expandFn } from '#utils/expandFn';
import _index from './index';
import object from './object';

/**
 * Aggregated type-level `primitive` helper.
 *
 * Uses {@linkcode expandFn} to extend the primitive union helper from
 * `./index` with:
 * - `object`: the union of primitives and nested plain objects.
 *
 * Exposed as `primitive` on the aggregated common {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { object });

export default fn;
