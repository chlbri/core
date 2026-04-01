import { ArrayS, PossibleString, JoinString } from "../../../types";
import stringConcatWithSeparatorTyped from "../utils";

type StringConcatWithSeparatorTyped_F = <
  T extends PossibleString,
  const A extends ArrayS,
>(
  sep: T,
  ...array: A
) => JoinString<A, T>;

export default stringConcatWithSeparatorTyped as StringConcatWithSeparatorTyped_F;
