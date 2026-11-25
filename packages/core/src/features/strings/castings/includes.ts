/**
 * Type guard checking that a string contains at least one of the given
 * segments.
 *
 * Returns `false` for non-string values, and `true` as soon as any segment is
 * found with `String.prototype.includes`.
 *
 * @template U - Tuple of candidate segments.
 * @param value - Value to test.
 * @param segments - Segments to look for.
 * @returns `true` when `value` is a string containing any of `segments`.
 */
const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is `${string}${U[number]}${string}` => {
  if (typeof value !== 'string') return false;

  // Check if the string contains any of the segments
  for (const seg of segments) {
    if (value.includes(seg)) {
      return true;
    }
  }
  return false;
};

export default fn;
