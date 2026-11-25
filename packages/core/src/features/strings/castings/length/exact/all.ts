import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';

/**
 * Aggregated helpers for exact string lengths.
 *
 * Extends the strict exact-length check from `./strict` through
 * {@linkcode expandFn} and attaches:
 * - `is`: type guard narrowing to an exact length;
 * - `low`: check returning a boolean alongside the value;
 * - `strict`: check throwing when the length differs.
 */
const exactAllLength = expandFn(strict, { is, low, strict });

export default exactAllLength;
