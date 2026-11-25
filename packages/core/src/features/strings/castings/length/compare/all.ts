import { expandFn } from '#utils/expandFn';
import low from './low';
import typed from './typed';
import number from './number/all';

/**
 * Aggregated helpers for comparing strings by length.
 *
 * Extends the typed comparator from `./typed` through {@linkcode expandFn} and
 * attaches:
 * - `low`: plain runtime comparator returning `-1`, `0` or `1`;
 * - `number`: comparators between a string length and a number.
 */
const compareLengthAll = expandFn(typed, { low, number });
export default compareLengthAll;
