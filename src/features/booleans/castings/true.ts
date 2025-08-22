import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

const fn = castFn<true>()({
  CONST: true,
  is: isFn(true),
});

export default fn;
