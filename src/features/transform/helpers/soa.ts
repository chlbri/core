import type { ObjectS } from '../types';
import type { SoA } from '#types';

const soa = <T extends ObjectS>(value: T) => {
  return value as SoA<T>;
};

export default soa;
