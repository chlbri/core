import { expandFn } from '#utils/expandFn';
import add from './add';
import contains from './contains';
import email from './email';
import endsWith from './endsWith';
import getLength from './getLength';
import includes from './includes';
import _index from './index';
import instance from './instance';
import join from './join';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';

/**
 * Aggregated type-level helpers for strings.
 *
 * Uses {@linkcode expandFn} to extend the base string typing function with:
 * - `add`: wraps a value type between a prefix and a suffix;
 * - `contains`: checks whether a string contains any of the given substrings;
 * - `email`: type-level email shape helper;
 * - `endsWith`: checks whether a string ends with a substring;
 * - `getLength`: length of a string literal;
 * - `includes`: alias of `contains`;
 * - `instance`: type-level helper for the `String` wrapper type;
 * - `join`: concatenates values with a separator;
 * - `letters`: helpers restricted to English letters;
 * - `splitBy`: splits a string on a separator;
 * - `startsWith`: checks whether a string starts with a substring;
 * - `toLowerCase`: lowercases a string literal;
 * - `toUpperCase`: uppercases a string literal.
 *
 * The base function additionally provides `forceCast`, `dynamic`, `is` and
 * `type`.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const typings = expandFn(_index, {
  add,
  contains,
  email,
  endsWith,
  getLength,
  includes,
  instance,
  join,
  letters,
  splitBy,
  startsWith,
  toLowerCase,
  toUpperCase,
});
