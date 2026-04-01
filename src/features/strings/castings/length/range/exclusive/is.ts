import isMin from "../../min/is";
import isMax from "../../max/is";

const isExclusiveRangeLength = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: T,
) => {
  return isMin(min, value) && isMax(max, value);
};

export default isExclusiveRangeLength;
