import type { To } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/primitive';

const fn = castFn<To>()({ is: isPlainObject });

export default fn;
