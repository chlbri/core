import type { Permutations, RuA } from '#types';
import { _unknown } from '#utils/_unknown';
import index from './index';

/**
 * Génère toutes les permutations possibles d'un tableau d'éléments.
 * @param arr Le tableau d'éléments à permuter.
 * @returns Un tableau contenant toutes les permutations possibles.
 *
 * **N.B: Sort the array before using this function to prevent unexpected results.**
 */
const fn = <const T extends RuA>(...arr: T) => {
  return _unknown<Permutations<T>[]>(index(...arr));
};

export default fn;
