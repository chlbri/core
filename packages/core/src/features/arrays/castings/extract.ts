import type { ExtractArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Keeps every element matching one of the given extractors.
 *
 * Filters `array` and narrows the result to type {@linkcode ExtractArray}
 * `<T, Ex[number]>`, the type-level counterpart being the `extract` helper of
 * {@linkcode typings}.
 *
 * @template T - Tuple type of the source array.
 * @template Ex - Tuple of the values to keep.
 * @param array - Array to filter.
 * @param extractors - Values kept from `array`.
 * @returns New array containing only the matching values.
 */
const fn = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...extractors: Ex
) => {
  const out = array.filter(item => extractors.includes(item));
  return _unknown<ExtractArray<T, Ex[number]>>(out);
};

export default fn;
