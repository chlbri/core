import { castFn } from '#utils/castFn';
import { isInstance } from '#utils/is/_default';

const fn = castFn<never>()({ is: isInstance(Error) });

export default fn;
