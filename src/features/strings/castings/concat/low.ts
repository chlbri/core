import { partialCall } from "#features/functions/functions";
import stringConcatUtil from "./utils";

const stringConcatLow = partialCall.paramArray(stringConcatUtil, "");
export default stringConcatLow;
