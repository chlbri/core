import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';

const fn = partialCall(omitIs, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => boolean;

export default fn;
