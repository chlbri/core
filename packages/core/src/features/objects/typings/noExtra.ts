import type { NoExtraKeysStrict } from '#types';
import { _unknown } from '#utils/_unknown';

type P<T> = NoExtraKeysStrict<T, T>;

// oxlint-disable-next-line no-unused-vars
const fn = <Schema>(_?: Schema) => {
  // oxlint-disable-next-line no-unused-vars
  return <T extends P<Schema>>(_?: T) => _unknown<T>();
};

export default fn;
