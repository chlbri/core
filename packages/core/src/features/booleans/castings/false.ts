import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

const fn = castFn<false>()({
  CONST: false,
  is: isFn(false),
});

export default fn;
