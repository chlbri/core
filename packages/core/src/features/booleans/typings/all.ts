import { expandFn } from '#utils/expandFn';
import _false from './false';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import _true from './true';
import type from './type';

/**
 * Aggregated type-level helpers for the `boolean` type.
 *
 * Uses {@linkcode expandFn} to extend the base typing function with:
 * - `forceCast`: forces a value to a boolean subtype;
 * - `is`: checks whether a type extends `boolean`;
 * - `type`: the `boolean` type;
 * - `true`: the literal `true`;
 * - `false`: the literal `false`.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const typings = expandFn(_index, {
  forceCast,
  is,
  type,
  true: _true,
  false: _false,
});
