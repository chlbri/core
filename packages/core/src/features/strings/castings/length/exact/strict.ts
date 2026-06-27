import lowExactLength from './low';
import { ExactLength } from '../../../types';

type StrictExactLength_L = <Exact extends number, T extends string>(
  exact: Exact,
  value: ExactLength<Exact, T>,
) => ExactLength<Exact, T>;

const strictExactLength: StrictExactLength_L = (exact, _value) => {
  const { bool, value } = lowExactLength(exact, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not equal to ${exact}`);
  }

  return value as any;
};

export default strictExactLength;
