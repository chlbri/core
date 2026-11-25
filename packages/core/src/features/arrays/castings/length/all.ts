import { expandFn } from '#utils/expandFn';
import has from './has';
import _index from './index';

/**
 * Aggregated runtime helpers for array lengths.
 *
 * Extends the length reader from `./index` through {@linkcode expandFn} with:
 * - `has`: guard factory checking for an exact length.
 *
 * Mirrors the `_length` helper of the type-level {@linkcode typings} aggregate.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { has });

export default fn;
