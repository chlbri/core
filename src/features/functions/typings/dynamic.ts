/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

const dynamic = <T extends any[], R = any>(..._: [...T, R]) =>
  _unknown<Fn<T, R>>();

export default dynamic;
