import { expandFn } from "#utils/expandFn";
import compare from "./compare/all";
import exact from "./exact/all";
import low from "./low";
import max from "./max/all";
import min from "./min/all";
import range from "./range/all";
import typed from "./typed";

const stringLengthAll = expandFn(typed, {
  compare,
  exact,
  min,
  max,
  range,
  typed,
  low,
});

export default stringLengthAll;
