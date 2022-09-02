import { expect, test } from 'vitest';
import { capitalize } from './capitalize';

test('#1 bobo => Bobo', () => {
  expect(capitalize('bobo')).toBe('Bobo');
});

test('#2 lorem ipsum => Lorem ipsum', () => {
  expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
});

test('#3 Animal => Animal', () => {
  expect(capitalize('Animal')).toBe('Animal');
});
