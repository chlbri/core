import { isTypeFn } from '#utils/is/_default';

const fn = <U extends string>(
  value: unknown,
  suffix: U,
): value is `${string}${U}` => {
  return isTypeFn('string')(value) && value.endsWith(suffix);
};

export default fn;
