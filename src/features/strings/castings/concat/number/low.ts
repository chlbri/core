const stringConcatNumberLow = (
  value: number,
  count: number,
  separator = "",
): string => {
  const out = Array(count).fill(value).join(separator);
  return out;
};

export default stringConcatNumberLow;
