import { expandFn } from '#utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

/**
 * Aggregated type-level helpers for deep readonly transforms.
 *
 * Uses {@linkcode expandFn} to extend the recursive readonly transform from
 * `./index` with:
 * - `not`: removes `readonly` from every property, recursively;
 * - `is`: checks whether an object type is deeply readonly.
 *
 * Exposed as `deep` on the `readonly` member of the aggregated common
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const deep = expandFn(deepReadonly, { not, is });

export default deep;
