import type { ExcludeArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Removes every element matching one of the given exclusions.
 *
 * Filters `array` and narrows the result to type {@linkcode ExcludeArray}
 * `<T, Ex[number]>`, the type-level counterpart being the `exclude` helper of
 * {@linkcode typings}.
 *
 * @template T - Tuple type of the source array.
 * @template Ex - Tuple of the values to exclude.
 * @param array - Array to filter.
 * @param excludes - Values removed from `array`.
 * @returns New array without the excluded values.
 */
const fn = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...excludes: Ex
) => {
  const out = array.filter(item => !excludes.includes(item));
  return _unknown<ExcludeArray<T, Ex[number]>>(out);
};

export default fn;
