import compare from "../../compare/number/typed";
import type { MinOrEqualLength } from "#types";

const isMaxLength = <N extends number, T extends string>(
  min: N,
  value: T,
): value is MinOrEqualLength<N, T> => {
  const out = compare(min, value);
  return out === 1 || out === 0;
};

export default isMaxLength;
