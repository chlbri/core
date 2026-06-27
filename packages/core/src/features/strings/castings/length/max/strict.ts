import lowMaxLength from './low';
import { MaxLength } from '../../../types';

type StrictMaxLength_L = <Max extends number, T extends string>(
  max: Max,
  value: MaxLength<Max, T>,
) => MaxLength<Max, T>;

const strictMaxLength: StrictMaxLength_L = (max, _value) => {
  const { bool, value } = lowMaxLength(max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not less than ${max}`);
  }

  return value as any;
};

export default strictMaxLength;
