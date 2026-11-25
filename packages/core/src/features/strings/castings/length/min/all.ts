import { expandFn } from '#utils/expandFn';
import is from './is';
import low from './low';
import strict from './strict';
import orEqual from './orEqual/all';

/**
 * Bundles every min-length helper.
 *
 * Starts from {@linkcode strictMinLength} and attaches the `is`, `low`,
 * `strict` and `orEqual` variants with {@linkcode expandFn}, so all helpers
 * share the same callable signature while keeping their own argument lists.
 */
const minAllLength = expandFn(strict, { is, low, strict, orEqual });

export default minAllLength;
