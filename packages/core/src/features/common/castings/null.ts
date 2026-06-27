import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

const fn = castFn<null>()({ is: isFn(null) });

export default fn;
