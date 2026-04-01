import low from "./low";
import { StringCompareWith } from "../../../types";
import { _unknown } from "#utils/_unknown";

type Fn1 = <T extends string, U extends string>(
  a: T,
  b: U,
) => StringCompareWith<T, U>;

const stringLengthCompareTyped: Fn1 = _unknown(low);
export default stringLengthCompareTyped;
