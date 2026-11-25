import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const dynamic = <T extends any[], R = any>(..._: [...T, R]) => _unknown<Fn<T, R>>();

export default dynamic;
