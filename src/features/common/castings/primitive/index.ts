import type { Primitive } from '#types';
import { castFn } from 'globals';

const fn = castFn<Primitive>()();

export default fn;
