import { expandFn } from '#utils/expandFn';
import low from './low';
import typed from './typed';

/**
 * Aggregated helpers for comparing a string length with a number.
 *
 * Extends the typed comparator from `./typed` through {@linkcode expandFn} and
 * attaches:
 * - `low`: plain runtime comparator returning `-1`, `0` or `1`.
 */
const compareLengthNumberAll = expandFn(typed, { low });
export default compareLengthNumberAll;
