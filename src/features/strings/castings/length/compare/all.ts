import { expandFn } from "#utils/expandFn";
import low from "./low";
import typed from "./typed";
import number from "./number/all";

const compareLengthAll = expandFn(typed, { low, number });
export default compareLengthAll;
