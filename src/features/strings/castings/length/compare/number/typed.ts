import { _unknown } from "#utils/_unknown";
import { StringCompare, StringLength } from "../../../../types";
import stringCompareLengthNumberLow from "./low";

type Fn1 = <N extends number, T extends string>(
  length: N,
  value: T,
) => StringCompare<StringLength<T>, N>;

const compareLengthNumberTyped: Fn1 = _unknown(stringCompareLengthNumberLow);

export default compareLengthNumberTyped;
