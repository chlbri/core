import { partialCall } from '#features/functions';
import { omitIs } from '../../../utils/omit';

const fn = partialCall(omitIs, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => boolean;

export default fn;
