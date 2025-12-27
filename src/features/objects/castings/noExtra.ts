/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NoExtraKeysStrict } from '#types';

type P<T> = NoExtraKeysStrict<T, T>;

const fn = <Schema>(_?: Schema) => {
  return <T extends P<Schema>>(value: T) => value;
};

export default fn;
