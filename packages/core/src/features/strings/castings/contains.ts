import includes from './includes';

/**
 * Type guard checking that a string contains at least one of the given
 * segments.
 *
 * Delegates to {@linkcode includes}, so the value is narrowed to a string
 * containing any of the segments.
 *
 * @template U - Tuple of candidate segments.
 * @param value - Value to test.
 * @param segments - Segments to look for.
 * @returns `true` when `value` is a string containing any of `segments`.
 */
const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is `${string}${U[number]}${string}` => includes(value, ...segments);

export default fn;
