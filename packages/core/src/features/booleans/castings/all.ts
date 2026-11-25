import { castFn } from '#utils/castFn';
import _false from './false';
import _index from './index';
import _true from './true';
import type from './type';

/**
 * Aggregated runtime helpers for the `boolean` type.
 *
 * Creates the identity boolean cast through {@linkcode castFn} and attaches:
 * - `is`: boolean type guard;
 * - `type`: the `Boolean` coercion function;
 * - `true`: cast to the literal `true`;
 * - `false`: cast to the literal `false`.
 *
 * `castFn` additionally provides `forceCast` and `dynamic`.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const castings = castFn<boolean>()({
  is: _index,
  type,
  true: _true,
  false: _false,
});
