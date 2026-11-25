import { expandFn } from '#utils/expandFn';
import runtime from './runtime';
import typings from './typings';

/**
 * Default-value casting helper augmented with its building blocks.
 *
 * Uses {@linkcode expandFn} to attach the runtime and typing-only variants as
 * `runtime` and `typings` members of the defaulted helper.
 */
const fn = expandFn(runtime, { runtime, typings });

export default fn;
