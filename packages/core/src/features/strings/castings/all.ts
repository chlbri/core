import { expandFn } from '#utils/expandFn';
import { DEFAULT_DELIMITER } from '../constants';
import add from './add';
import concat from './concat/all';
import contains from './contains';
import endsWith from './endsWith';
import includes from './includes';
import _index from './index';
import instance from './instance';
import is from './is';
import join from './join';
import length from './length/all';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';
import type from './type';

/**
 * Aggregated runtime helpers for string values.
 *
 * Extends the identity string cast from `./index` through {@linkcode expandFn}
 * and attaches:
 * - `is`: guard narrowing a value to `string`;
 * - `instance`: cast for `String` wrapper objects;
 * - `type`: the `String` constructor;
 * - `startsWith` and `endsWith`: prefix and suffix guards;
 * - `includes`: guard checking for any of the given segments;
 * - `contains`: alias of the `includes` guard;
 * - `toLowerCase` and `toUpperCase`: case-conversion helpers;
 * - `letters`: letter helpers;
 * - `add`: wrapping helper adding a prefix and a suffix;
 * - `join`: joins values with a separator;
 * - `splitBy`: splits a string on a separator;
 * - `DEFAULT_DELIMITER`: the default `.` separator;
 * - `length`: string length helpers;
 * - `concat`: string concatenation helpers.
 *
 * Mirrors the type-level `typings` helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const castings = expandFn(_index, {
  is,
  instance,
  type,
  startsWith,
  endsWith,
  includes,
  contains,
  toLowerCase,
  toUpperCase,
  letters,
  add,
  join,
  splitBy,
  DEFAULT_DELIMITER,
  length,
  concat,
});
