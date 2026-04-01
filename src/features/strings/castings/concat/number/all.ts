import { expandFn } from "#utils/expandFn";
import char from "./char";
import low from "./low";
import typed from "./typed";

const stringConcatNumberAll = expandFn(typed, {
  char,
  low,
  typed,
});

export default stringConcatNumberAll;
