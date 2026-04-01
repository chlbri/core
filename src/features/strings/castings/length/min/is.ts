import compare from "../compare/number/typed";
import type { MinLength } from "#types";

const isMaxLength = <N extends number, T extends string>(
  min: N,
  value: T,
): value is MinLength<N, T> => {
  const out = compare(min, value);
  return out === 1;
};

export default isMaxLength;
