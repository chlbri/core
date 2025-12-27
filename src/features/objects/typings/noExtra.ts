/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NoExtraKeysStrict } from '#types';
import { _unknown } from '#utils/_unknown';

type P<T> = NoExtraKeysStrict<T, T>;

const fn = <Schema>(_?: Schema) => {
  return <T extends P<Schema>>(_?: T) => _unknown<T>();
};

export default fn;
