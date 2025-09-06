import { castings } from '#features/arrays/castings/all';
import { describe, expect, it } from 'vitest';

describe('permutations', () => {
  it('#01 => returns all permutations of an array of 3 elements', () => {
    const result = castings.tuple.permutations.strict(1, 2, 3);
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it('#02 => returns a single permutation for an array of one element', () => {
    const result = castings.tuple.permutations.strict(42);
    expect(result).toEqual([[42]]);
  });

  it('#03 => returns an empty array for an empty input', () => {
    const result = castings.tuple.permutations.strict();
    expect(result).toEqual([]);
  });

  it('#04 => handles string inputs correctly', () => {
    const result = castings.tuple.permutations.strict('a', 'b');
    expect(result).toEqual([
      ['a', 'b'],
      ['b', 'a'],
    ]);
  });

  it('#05 => Array of 4 elements', () => {
    /**
     * There are 24 permutations for an array of 4 elements (4! = 24).
     */
    const result = castings.tuple.permutations.strict(1, 2, 3, 4);
    expect(result).toEqual([
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1],
    ]);
  });
});
