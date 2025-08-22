import { isTypeFn } from '#utils/is/_default';

const fn = <U extends string>(
  value: unknown,
  prefix: U,
): value is `${U}${string}` => {
  return isTypeFn('string')(value) && value.startsWith(prefix);
};

export default fn;
