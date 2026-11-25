import type { NoExtraKeysStrict } from '#types';

type P<T> = NoExtraKeysStrict<T, T>;

// oxlint-disable-next-line no-unused-vars
const fn = <Schema>(_?: Schema) => {
  return <T extends P<Schema>>(value: T) => value;
};

export default fn;
