import { expandFn } from '#utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is/all';

/**
 * Aggregated runtime casting helpers.
 *
 * Extends the base casting factory with:
 * - `is`: function type guard, including a strict variant;
 * - `forceCast`: casts any value to a function type;
 * - `dynamic`: exposes a function subtype unchanged;
 * - `checker`: checker-specific cast helpers.
 *
 * @see -- type {@linkcode FnBasic}
 */
const castings = expandFn(_index, { is, forceCast, dynamic, checker });

export default castings;
