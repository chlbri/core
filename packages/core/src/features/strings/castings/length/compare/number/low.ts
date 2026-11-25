/**
 * Compares the length of a string with a number.
 *
 * @param value - String whose length is compared.
 * @param length - Number to compare the string length against.
 * @returns `0` when the length equals `length`, `-1` when the string is
 * shorter and `1` when it is longer.
 */
const stringCompareLengthNumberLow = (
  { length: valueLen }: string,
  length: number,
) => {
  let out = 0;
  if (valueLen === length) return out;
  out = valueLen < length ? -1 : 1;
  return out;
};

export default stringCompareLengthNumberLow;
