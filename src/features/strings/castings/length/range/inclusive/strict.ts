import lowInclusiveRangeLength from './low';
import { InRangeInclusive } from '../../../../types';

type StrictInclusiveRangeLength_L = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: InRangeInclusive<Min, Max, T>,
) => InRangeInclusive<Min, Max, T>;

const strictInclusiveRangeLength: StrictInclusiveRangeLength_L = (
  min,
  max,
  _value,
) => {
  const { bool, value } = lowInclusiveRangeLength(min, max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not in range [${min}, ${max}]`);
  }

  return value as any;
};

export default strictInclusiveRangeLength;
