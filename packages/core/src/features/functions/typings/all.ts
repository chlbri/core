import { expandFn } from '#utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';

/**
 * Aggregated type-level helpers for functions.
 *
 * Extends the base typing function with:
 * - `dynamic`: exposes a function subtype at the type level;
 * - `forceCast`: forces a value to a function type;
 * - `checker`: checker-specific typing helpers.
 *
 * @see -- type {@linkcode FnBasic}
 */
export const typings = expandFn(_index, { dynamic, forceCast, checker });
