import { expandFn } from '#utils/expandFn';
import index from './index';
import strict from './strict';

const fn = expandFn(index, {
  /**
   * Génère toutes les permutations possibles d'un tableau d'éléments.
   * @param arr Le tableau d'éléments à permuter.
   * @returns Un tableau contenant toutes les permutations possibles.
   *
   * **N.B: Sort the array before using this function to prevent unexpected results.**
   */
  strict,
});

export default fn;
