import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import lower from './lower';
import upper from './upper';

/**
 * Aggregated runtime helpers for English letters.
 *
 * Extends the base letters cast created by {@linkcode castFn} through
 * {@linkcode expandFn}, attaching:
 * - `is`: type guard recognising letter strings;
 * - `lower`: cast restricted to lowercase letters;
 * - `upper`: cast restricted to uppercase letters.
 *
 * `castFn` additionally provides `forceCast` and `dynamic`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { lower, upper, is });

export default fn;
