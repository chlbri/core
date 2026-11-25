import lowMaxOrEqualLength from './low';
import { MaxOrEqualLength } from '../../../../types';

type StrictMaxOrEqualLength_L = <Max extends number, T extends string>(
  max: Max,
  value: MaxOrEqualLength<Max, T>,
) => MaxOrEqualLength<Max, T>;

const strictMaxOrEqualLength: StrictMaxOrEqualLength_L = (max, _value) => {
  const { bool, value } = lowMaxOrEqualLength(max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not less than or equal to ${max}`);
  }

  return value as any;
};

export default strictMaxOrEqualLength;
