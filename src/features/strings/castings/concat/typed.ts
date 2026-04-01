import { ArrayS, JoinString } from "../../types";
import stringConcatTyped from "./low";

type StringConcatTyped_F = <T extends ArrayS>(...array: T) => JoinString<T>;

export default stringConcatTyped as StringConcatTyped_F;
