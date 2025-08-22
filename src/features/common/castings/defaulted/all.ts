import { expandFn } from '#utils/expandFn';
import runtime from './runtime';
import typings from './typings';

const fn = expandFn(runtime, { runtime, typings });

export default fn;
