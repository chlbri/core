import { partialCall } from '#features/functions';
import { omit } from '../../../utils/omit';

const fn = partialCall(omit, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;
