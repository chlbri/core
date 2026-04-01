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
