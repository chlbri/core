import { expandFn } from '#utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import is from './is';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import type from './type';
import ZERO from './ZERO';

/**
 * Aggregated runtime helpers for the `number` type.
 *
 * Extends the base number cast created by {@linkcode castFn} through
 * {@linkcode expandFn}, attaching:
 * - `is`: number type guard;
 * - `getString`: number to string conversion;
 * - `digit`: cast restricted to the decimal digits;
 * - `type`: the `Number` coercion function;
 * - `ZERO`: the constant `0`;
 * - `ONE`: the constant `1`;
 * - `MINUS_1`: the constant `-1`;
 * - `bigint`: cast for the `bigint` type.
 *
 * `castFn` additionally provides `forceCast` and `dynamic`.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const castings = expandFn(_index, {
  is,
  getString,
  digit,
  type,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});
