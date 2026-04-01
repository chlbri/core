import { TupleOf } from "#types";
import { ExactLength, JoinString } from "../../../types";
import stringConcatChar from "./low";

type MultiChar_F = <T extends string, N extends number, S extends string = "">(
  char: ExactLength<1, T>,
  count: N,
  separator?: S,
) => JoinString<TupleOf<T, N>, S>;

export default stringConcatChar as MultiChar_F;
