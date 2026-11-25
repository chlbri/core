import { expandFn } from '#utils/expandFn';
import is from '../is';
import _index from './index';
import multiply from './multiply';
import permutations from './permutations/all';

/**
 * Aggregated runtime helpers for tuples.
 *
 * Extends the identity tuple cast from `./index` through {@linkcode expandFn}
 * with:
 * - `multiply`: repeats a value into a fixed-length tuple;
 * - `is`: guard factory checking every tuple element;
 * - `permutations`: permutation generator with a `strict` variant.
 *
 * Mirrors the `tuple` helper of the type-level {@linkcode typings} aggregate.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { multiply, is, permutations });

export default fn;
