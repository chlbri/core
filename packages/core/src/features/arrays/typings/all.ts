import { typeFn } from '#utils/typeFn';
import dynamic from './dynamic';
import exclude from './exclude';
import extract from './extract';
import forceCast from './forceCast';
import freeze from './freeze';
import indexes from './indexes/all';
import is from './is';
import _length from './length';
import low from './low';
import reduce from './reduce/all';
import reverse from './reverse';
import toArray from './toArray';
import tuple from './tuple/all';
import type from './type';

/**
 * Aggregated type-level helpers for arrays.
 *
 * Built with {@linkcode typeFn}, which supplies the main call signature and the
 * `forceCast`, `dynamic`, `is` and `type` members, and extended with:
 * - `low`: types variadic values as an array;
 * - `indexes`: the valid indexes of a tuple, with a `union` variant;
 * - `_length`: the length of a tuple;
 * - `tuple`: captures tuples, with `is` and `number` variants;
 * - `reduce`: extracts the element type, with a `deep` variant;
 * - `reverse`: reverses a tuple;
 * - `toArray`: wraps a type in an array;
 * - `freeze`: makes an array readonly;
 * - `extract` and `exclude`: filter tuple elements by type.
 *
 * The `is`, `forceCast`, `dynamic` and `type` members added by `typeFn` take
 * precedence over the same-named imports.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const typings = typeFn<Array<unknown>>()({
  low,
  is,
  indexes,
  _length,
  tuple,
  reduce,
  reverse,
  toArray,
  freeze,
  extract,
  exclude,
  forceCast,
  dynamic,
  type,
});
