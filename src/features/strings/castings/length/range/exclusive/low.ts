import isExclusiveRangeLength from "./is";

const lowExclusiveRangeLength = (min: number, max: number, value: string) => {
  const bool = isExclusiveRangeLength(min, max, value);

  return {
    bool,
    value,
  };
};

export default lowExclusiveRangeLength;
