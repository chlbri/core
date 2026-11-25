import { expandFn } from '#utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import ZERO from './ZERO';

/**
 * Aggregated type-level helpers for the `number` type.
 *
 * Uses {@linkcode expandFn} to extend the base typing function with:
 * - `getString`: string form of a numeric type;
 * - `digit`: type-level digit union helper;
 * - `ZERO`: the literal `0`;
 * - `ONE`: the literal `1`;
 * - `MINUS_1`: the literal `-1`;
 * - `bigint`: type-level helper for `bigint`.
 *
 * The base function additionally provides `forceCast`, `dynamic`, `is` and
 * `type`.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const typings = expandFn(_index, {
  getString,
  digit,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});
