import type { SoA } from '#types';
import { expandFn } from '#utils/expandFn';

/**
 * Callable shape of the {@linkcode toArray} helper.
 *
 * The base call normalises a single-or-array value, while the `typed` property
 * exposes the same behaviour with a narrower element type.
 */
type ToArray_F = {
  /**
   * Normalises a single-or-array value into an array.
   *
   * @template T - Element type of the resulting array.
   * @param obj - Value to normalise.
   * @returns Array built from `obj`.
   */
  <T>(obj?: SoA<unknown>): T[];

  /**
   * Typed variant of the base call, removing `undefined` from the element type.
   *
   * @template T - Element type of the input value.
   * @param obj - Value to normalise.
   * @returns Array built from `obj`, without `undefined` elements.
   */
  typed: <T>(obj: SoA<T>) => Exclude<T, undefined>[];
};

/**
 * Normalises a single-or-array value into an array.
 *
 * Falsy values (such as `undefined`, `null`, `0` and `''`) produce an empty
 * array, arrays are returned unchanged, and any other value is wrapped in a
 * one-element array.
 *
 * @param value - Value to normalise.
 * @returns Array built from `value`.
 */
const _toArray = (value?: unknown) => {
  if (!value) return [];
  const checkArray = Array.isArray(value);
  const out = checkArray ? value : [value];

  return out;
};

/**
 * Normalises a single-or-array value into an array.
 *
 * Built with {@linkcode expandFn} from {@linkcode _toArray}, which is also
 * attached as the `typed` variant. Mirrors the `toArray` helper of the
 * type-level {@linkcode typings} aggregate.
 *
 * @see -- type {@linkcode ToArray_F}
 */
const toArray: ToArray_F = expandFn(_toArray, { typed: _toArray });

export default toArray;
