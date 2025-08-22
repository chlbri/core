import includes from './includes';

const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is `${string}${U[number]}${string}` =>
  includes(value, ...segments);

export default fn;
