import { expandFn } from '#utils/expandFn';
import typed from './typed';
import low from './low';
import withSeparator from './withSeparator/all';
import number from './number/all';

/**
 * Aggregated string concatenation helpers.
 *
 * Uses {@linkcode expandFn} to extend the typed concatenation function from
 * `./typed` with:
 * - `low`: concatenation without a separator;
 * - `typed`: the typed concatenation function itself;
 * - `withSeparator`: helpers taking an explicit separator;
 * - `number`: repetition helpers for numbers.
 *
 * Exposed as `concat` on the aggregated `castings` helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const stringConcatAll = expandFn(typed, { low, typed, withSeparator, number });

export default stringConcatAll;
