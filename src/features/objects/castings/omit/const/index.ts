import { partialCall } from '#features/functions/functions/partialCall';
import { omit } from '../../../utils/omit';

const fn = partialCall(omit, 'key') as <
  const T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;
