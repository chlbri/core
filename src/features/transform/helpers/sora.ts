import type { ObjectS } from '#features/transform/types';
import type { SoRa } from '#types';

const sora = <T extends ObjectS>(value: T) => {
  return value as SoRa<T>;
};

export default sora;
