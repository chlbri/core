import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

export const castings = castFn<boolean>()({
  is: (data: unknown) => typeof data === 'boolean',

  type: Boolean,

  true: castFn<true>()({
    CONST: true,
    is: isFn(true),
  }),

  false: castFn<false>()({
    CONST: false,
    is: isFn(false),
  }),
});
