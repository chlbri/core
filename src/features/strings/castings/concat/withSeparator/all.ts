import { expandFn } from "#utils/expandFn";
import typed from "./typed";
import build from "./build";
import low from "./low";

const stringConcatWithSeparatorAll = expandFn(typed, {
  typed,
  build,
  low,
});

export default stringConcatWithSeparatorAll;
