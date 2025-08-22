import { partialCall } from '#features/functions/functions/partialCall';
import type { SubType } from '#types';
import { omit } from '../../../utils/omit';

const fn = partialCall(omit, 'element') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...values: K
) => SubType<T, K[number]>;

export default fn;
