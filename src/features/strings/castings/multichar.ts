import { TupleOf } from '#types';
import { ExactLength, JoinString } from '../types';

type MultiChar_F = <
  T extends string,
  N extends number,
  S extends string = '',
>(
  char: ExactLength<1, T>,
  count: N,
  separator?: S,
) => JoinString<TupleOf<T, N>, S>;

const multiCharString: MultiChar_F = (
  char,
  count,
  separator: any = '',
) => {
  const out: any = Array(count).fill(char).join(separator);
  return out;
};

export default multiCharString;
