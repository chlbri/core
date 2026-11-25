import type { RuA, TupleOf } from '#types';
import multiply from '../multiply';

/**
 * Generates every permutation of the given elements.
 *
 * Uses a backtracking algorithm that consumes each position once, so every
 * returned tuple has the input length and the same elements. Duplicate values
 * are treated as distinct positions, which is why sorting the input first is
 * recommended for predictable output.
 *
 * @template T - Tuple type of the permuted values.
 * @param arr - Elements to permute.
 * @returns Every ordering of `arr`, typed as type {@linkcode TupleOf}
 * `<T[number], T['length']>[]`.
 */
const fn = <const T extends RuA>(...arr: T): TupleOf<T[number], T['length']>[] => {
  const n = arr.length;
  if (n < 1) return [];
  const res: any = [];
  const used: boolean[] = multiply(false, n);
  const cur: any = [];

  const backtrack = () => {
    if (cur.length === n) {
      res.push([...cur]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      used[i] = true;
      cur.push(arr[i] as any);
      backtrack();
      cur.pop();
      used[i] = false;
    }
  };

  backtrack();
  return res;
};

export default fn;
