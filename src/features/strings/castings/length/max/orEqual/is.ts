import compare from "../../compare/number/typed";
import type { MaxOrEqualLength } from "#types";

const isMaxLength = <N extends number, T extends string>(
  max: N,
  value: T,
): value is MaxOrEqualLength<N, T> => {
  const out = compare(max, value);
  return out === -1 || out === 0;
};

export default isMaxLength;
