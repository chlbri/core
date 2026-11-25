import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';

/**
 * Bundles the inclusive-range length helpers.
 *
 * Extends {@linkcode strictInclusiveRangeLength} with the `is` and `low`
 * variants through {@linkcode expandFn}, so every helper checks the closed
 * interval `[min, max]`.
 */
const inclusiveRangeAllLength = expandFn(strict, { is, low, strict });

export default inclusiveRangeAllLength;
