import { ExactLength } from "../../../types";
import compare from "../compare//number/typed";

const isExactLength = <N extends number, T extends string>(
  exact: N,
  value: T,
): value is ExactLength<N, T> => {
  const out = compare(exact, value);
  return out === 0;
};

export default isExactLength;
