import { ARRAY } from '../constants';
import type { __ObjectS, ArrayCustom, Maybe } from '../types';

const array = <T extends __ObjectS | Maybe>(value: T) =>
  ({ [ARRAY]: value }) as ArrayCustom<T>;

export default array;
