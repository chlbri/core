import isInclusiveRangeLength from './is';

const lowInclusiveRangeLength = (min: number, max: number, value: string) => {
  const bool = isInclusiveRangeLength(min, max, value);

  return {
    bool,
    value,
  };
};

export default lowInclusiveRangeLength;
