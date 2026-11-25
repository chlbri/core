import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Splits a string on a separator.
 *
 * The result is typed as the tuple of the split segments.
 *
 * @template S - Type of the string to split.
 * @template By - Type of the separator.
 * @param value - String to split.
 * @param by - Separator used to split `value`; defaults to `'.'`.
 * @returns The split segments.
 * @see -- type {@linkcode SplitStringBy}
 */
const fn = <const S extends string, By extends string = '.'>(
  value: S,
  by = '.' as By,
) => {
  const out = value.split(by);
  return _unknown<SplitStringBy<S, By>>(out);
};

export default fn;
