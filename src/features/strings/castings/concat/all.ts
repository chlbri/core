import { expandFn } from "#utils/expandFn";
import typed from "./typed";
import low from "./low";
import withSeparator from "./withSeparator/all";
import number from "./number/all";

const stringConcatAll = expandFn(typed, {
  low,
  typed,
  withSeparator,
  number,
});

export default stringConcatAll;
