import type { JoinString } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Joins the given values with a separator.
 *
 * The result is typed as a template literal composed of the values separated
 * by `sep`.
 *
 * @template T - Tuple of values to join.
 * @template S - Type of the separator.
 * @param sep - Separator inserted between values; defaults to a space.
 * @param args - Values to join.
 * @returns The joined string.
 * @see -- type {@linkcode JoinString}
 */
const fn = <T extends readonly string[], S extends string = ' '>(
  sep = ' ' as S,
  ...args: T
) => {
  const out = args.join(sep);
  return _unknown<JoinString<T, S>>(out);
};

export default fn;
