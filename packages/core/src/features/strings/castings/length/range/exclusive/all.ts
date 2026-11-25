import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';

/**
 * Bundles the exclusive-range length helpers.
 *
 * Extends {@linkcode strictExclusiveRangeLength} with the `is` and `low`
 * variants through {@linkcode expandFn}, so every helper checks the open
 * interval `(min, max)`.
 */
const exclusiveRangeAllLength = expandFn(strict, { is, low, strict });

export default exclusiveRangeAllLength;
