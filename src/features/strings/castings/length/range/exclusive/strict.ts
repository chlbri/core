import lowExclusiveRangeLength from './low';
import { InRangeExclusive } from '../../../../types';

type StrictExclusiveRangeLength_L = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: InRangeExclusive<Min, Max, T>,
) => InRangeExclusive<Min, Max, T>;

const strictExclusiveRangeLength: StrictExclusiveRangeLength_L = (
  min,
  max,
  _value,
) => {
  const { bool, value } = lowExclusiveRangeLength(min, max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not in range (${min}, ${max})`);
  }

  return value as any;
};

export default strictExclusiveRangeLength;
