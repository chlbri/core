/**
 * Repeats a number as a string, separated by an optional separator.
 *
 * @param value - Number to repeat.
 * @param count - Number of repetitions.
 * @param separator - Separator inserted between repetitions; defaults to
 * `''`.
 * @returns The repeated values joined by `separator`.
 */
const stringConcatNumberLow = (
  value: number,
  count: number,
  separator = '',
): string => {
  const out = Array(count).fill(value).join(separator);
  return out;
};

export default stringConcatNumberLow;
