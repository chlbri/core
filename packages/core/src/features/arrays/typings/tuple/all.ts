import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import multiply from './multiply';

/**
 * Aggregated type-level helpers for tuples.
 *
 * Uses {@linkcode expandFn} to extend the base tuple-capturing function with:
 * - `number`: repeats a value into a tuple of a given length;
 * - `is`: checks whether a type is a readonly array or tuple.
 *
 * Exposed as `tuple` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { number: multiply, is });

export default fn;
