import type { Letters } from '#types';
import { typeFn } from '#utils/typeFn';
import lower from './lower';
import upper from './upper';

/**
 * Aggregated type-level helpers for English letters.
 *
 * Uses {@linkcode expandFn} to extend the base letters typing function with:
 * - `lower`: helper restricted to lowercase letters;
 * - `upper`: helper restricted to uppercase letters.
 *
 * The base function additionally provides `forceCast`, `dynamic`, `is` and
 * `type`. Exposed as `letters` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Letters>()({ lower, upper });

export default fn;
