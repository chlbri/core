import type { AllowedNamesLow } from '#types';

const fn = <T extends object, K extends AllowedNamesLow<T, undefined>>(
  object: T,
  requires: Pick<T, K>,
) => {
  return Object.assign(object, requires);
};

export default fn;
