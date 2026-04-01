import compare from "../compare/number/typed";
import type { MaxLength } from "../../../types";

const isMaxLength = <N extends number, T extends string>(
  max: N,
  value: T,
): value is MaxLength<N, T> => {
  const out = compare(max, value);
  return out === -1;
};

export default isMaxLength;
