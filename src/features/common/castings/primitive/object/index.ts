import type { PrimitiveObject } from '#types';
import { castFn } from 'globals';

const fn = castFn<PrimitiveObject>()();

export default fn;
