import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';

/**
 * Bundles the inclusive min-length helpers.
 *
 * Starts from {@linkcode strictMinOrEqualLength} and attaches the `is` and
 * `low` variants with {@linkcode expandFn}, so every helper accepts lengths
 * greater than or equal to the minimum.
 */
const minOrEqualAllLength = expandFn(strict, { is, low, strict });

export default minOrEqualAllLength;
