import { expandFn } from '#utils/expandFn';
import typed from './typed';
import build from './build';
import low from './low';

/**
 * Aggregated helpers for concatenating values with an explicit separator.
 *
 * Uses {@linkcode expandFn} to extend the typed concatenation function from
 * `./typed` with:
 * - `typed`: the typed concatenation function itself;
 * - `build`: builder returning a separator-bound concatenation function;
 * - `low`: untyped implementation from `../utils`.
 *
 * Exposed as `withSeparator` on the aggregated concatenation helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const stringConcatWithSeparatorAll = expandFn(typed, { typed, build, low });

export default stringConcatWithSeparatorAll;
