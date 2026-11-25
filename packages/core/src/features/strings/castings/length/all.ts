import { expandFn } from '#utils/expandFn';
import compare from './compare/all';
import exact from './exact/all';
import low from './low';
import max from './max/all';
import min from './min/all';
import range from './range/all';
import typed from './typed';

/**
 * Aggregated runtime helpers for string lengths.
 *
 * Extends the typed length reader from `./typed` through {@linkcode expandFn}
 * and attaches:
 * - `compare`: comparison of two strings by length;
 * - `exact`: exact-length guards and strict checks;
 * - `min`: minimum-length guards and strict checks;
 * - `max`: maximum-length guards and strict checks;
 * - `range`: range-length guards and strict checks;
 * - `typed`: the typed length reader itself;
 * - `low`: the plain runtime length reader.
 */
const stringLengthAll = expandFn(typed, {
  compare,
  exact,
  min,
  max,
  range,
  typed,
  low,
});

export default stringLengthAll;
