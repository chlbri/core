import { expandFn } from '#utils/expandFn';
import deepFreeze from './index';
import not from './not';

/**
 * Aggregated type-level helpers for deeply readonly objects.
 *
 * Uses {@linkcode expandFn} to extend the recursive readonly transform from
 * `./index` with:
 * - `not`: removes `readonly` from every property, recursively.
 *
 * Exposed as `deep` on the `freeze` member of the aggregated
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const deep = expandFn(deepFreeze, { not });

export default deep;
