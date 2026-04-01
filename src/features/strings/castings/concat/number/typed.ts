import { TupleOf } from "#types";
import { JoinString } from "../../../types";
import stringConcatTyped from "./low";

type MultiString_F = <
  T extends string,
  N extends number,
  S extends string = "",
>(
  value: T,
  count: N,
  separator?: S,
) => JoinString<TupleOf<T, N>, S>;

export default stringConcatTyped as MultiString_F;
