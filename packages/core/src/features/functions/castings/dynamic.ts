import type { Fn } from '#types';
import { identity } from '#utils/identity';

const dynamic = <T extends any[], R = any>(..._: [...T, R]) =>
  identity<Fn<T, R>>;

export default dynamic;
