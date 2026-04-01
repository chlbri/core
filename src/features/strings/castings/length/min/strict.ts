import lowMinLength from './low';
import { MinLength } from '../../../types';

type StrictMinLength_L = <Min extends number, T extends string>(
  min: Min,
  value: MinLength<Min, T>,
) => MinLength<Min, T>;

const strictMinLength: StrictMinLength_L = (min, _value) => {
  const { bool, value } = lowMinLength(min, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not greater than ${min}`);
  }

  return value as any;
};

export default strictMinLength;
