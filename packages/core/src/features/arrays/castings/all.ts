import { expandFn } from '#utils/expandFn';
import dynamic from './dynamic';
import fn from './exclude';
import extract from './extract';
import forceCast from './forceCast';
import freeze from './freeze';
import _index from './index';
import indexes from './indexes';
import is from './is';
import _length from './length/all';
import low from './low';
import reduce from './reduce';
import reverse from './reverse';
import toArray from './toArray';
import tuple from './tuple/all';
import type from './type';

/**
 * Aggregated runtime helpers for array values.
 *
 * Extends the identity array cast from `./index` through {@linkcode expandFn}
 * and attaches:
 * - `low`: identity cast that keeps elements in an array;
 * - `is`: `Array.isArray` type guard;
 * - `indexes`: tuple of the indexes of an array;
 * - `_length`: array length reader with a `has` guard;
 * - `tuple`: tuple helpers (`multiply`, `is`, `permutations`);
 * - `reduce`: unwraps a single-element array;
 * - `toArray`: single-or-array normalisation helper;
 * - `reverse`: reversed copy helper;
 * - `freeze`: frozen tuple helper;
 * - `extract`: keeps matching elements;
 * - `exclude`: drops matching elements;
 * - `forceCast`: unchecked cast to an array;
 * - `dynamic`: identity cast keeping the array type;
 * - `type`: the `Array` constructor.
 *
 * Mirrors the type-level {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const castings = expandFn(_index, {
  low,
  is,
  indexes,
  _length,
  tuple,
  reduce,
  toArray,
  reverse,
  freeze,
  extract,
  exclude: fn,
  forceCast,
  dynamic,
  type,
});
