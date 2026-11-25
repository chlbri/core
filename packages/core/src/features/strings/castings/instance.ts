import { castFn } from '#utils/castFn';

/**
 * Casting helper for `String` wrapper objects.
 *
 * Created by the base cast factory with an `is` guard that checks
 * `value instanceof String`; the cast itself is an identity function.
 *
 * @see {@linkcode castFn}
 */
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
const fn = castFn<String>()({
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  is: (value: unknown): value is String => {
    return value instanceof String;
  },
});

export default fn;
