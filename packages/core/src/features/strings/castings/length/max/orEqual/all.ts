import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';

/**
 * Aggregated helpers for maximum string lengths, inclusive of the bound.
 *
 * Extends the strict check from `./strict` through {@linkcode expandFn} and
 * attaches:
 * - `is`: type guard accepting lengths up to and including the maximum;
 * - `low`: check returning a boolean alongside the value;
 * - `strict`: check throwing when the string is longer than the maximum.
 */
const maxOrEqualAllLength = expandFn(strict, { is, low, strict });

export default maxOrEqualAllLength;
