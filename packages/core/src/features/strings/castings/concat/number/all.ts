import { expandFn } from '#utils/expandFn';
import char from './char';
import low from './low';
import typed from './typed';

/**
 * Aggregated repetition helpers for numbers.
 *
 * Uses {@linkcode expandFn} to extend the typed repetition function from
 * `./typed` with:
 * - `char`: repetition of a single-character string;
 * - `low`: untyped repetition implementation;
 * - `typed`: the typed repetition function itself.
 *
 * Exposed as `number` on the aggregated concatenation helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const stringConcatNumberAll = expandFn(typed, { char, low, typed });

export default stringConcatNumberAll;
