import { castFn } from '#utils/castFn';
import { isTypeFn } from '#utils/is/_default';

const fn = castFn<bigint>()({
  is: isTypeFn('bigint'),
});

export default fn;
