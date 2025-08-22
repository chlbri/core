import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

const fn = castFn<undefined>()({ is: isFn(undefined) });

export default fn;
