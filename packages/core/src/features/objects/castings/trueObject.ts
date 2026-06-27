import type { To } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/object';

const fn = castFn<To>()({ is: isPlainObject });

export default fn;
