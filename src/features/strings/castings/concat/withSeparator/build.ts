import { partialCall } from "#features/functions/functions";
import { ArrayS, PossibleString, JoinString } from "../../../types";
import typed from "./typed";

type StringConcatWithSeparatorBuild_F = <T extends PossibleString>(
  sep: T,
) => <A extends ArrayS>(...array: A) => JoinString<A, T>;

const stringConcatWithSeparatorBuild: StringConcatWithSeparatorBuild_F = (
  sep,
) => partialCall.low(typed, sep);

export default stringConcatWithSeparatorBuild;
