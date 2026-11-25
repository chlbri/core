import type { To } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/object';

/**
 * Identity cast restricted to true objects.
 *
 * Built with {@linkcode castFn}, it reuses {@linkcode isPlainObject} as its
 * `is` guard so that only plain objects are accepted.
 *
 * @see -- type {@linkcode To}
 */
const fn = castFn<To>()({ is: isPlainObject });

export default fn;
