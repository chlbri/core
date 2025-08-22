import { castFn } from '#utils/castFn';

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
const fn = castFn<String>()({
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  is: (value: unknown): value is String => {
    return value instanceof String;
  },
});

export default fn;
