import type { Checker2 } from '#types';

const byType = <T>(checker: Checker2<T>) => checker;

export default byType;
