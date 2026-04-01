import isMinOrEqual from "../../min/orEqual/is";
import isMaxOrEqual from "../../max/orEqual/is";

const isInclusiveRangeLength = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: T,
) => {
  return isMinOrEqual(min, value) && isMaxOrEqual(max, value);
};

export default isInclusiveRangeLength;
