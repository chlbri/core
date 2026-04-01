const isInclusiveRangeLength = (min: number, max: number, value: string) => {
  return value.length >= min && value.length <= max;
};

export default isInclusiveRangeLength;
