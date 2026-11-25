import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';
import orEqual from './orEqual/all';

/**
 * Aggregated helpers for maximum string lengths.
 *
 * Extends the strict maximum-length check from `./strict` through
 * {@linkcode expandFn} and attaches:
 * - `is`: type guard for lengths strictly below the maximum;
 * - `low`: check returning a boolean alongside the value;
 * - `strict`: check throwing when the string is too long;
 * - `orEqual`: helpers accepting lengths up to and including the maximum.
 */
const maxAllLength = expandFn(strict, { is, low, strict, orEqual });

export default maxAllLength;
