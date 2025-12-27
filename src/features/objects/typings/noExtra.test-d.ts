import fn from './noExtra';

const log1 = fn({ a: 1, b: 2 }); // OK

expectTypeOf(log1).branded.toEqualTypeOf<
  <T extends { a: number; b: number }>(value?: T) => T
>();

expectTypeOf(log1).branded.toEqualTypeOf<
  (value?: { a: number; b: number }) => { a: number; b: number }
>();

const log2 = fn<{
  a?: number;
  b?: number;
}>();

expectTypeOf(log2).branded.toEqualTypeOf<
  <T extends { a?: number; b?: number }>(value?: T) => T
>();

expectTypeOf(log2).branded.toEqualTypeOf<
  (value?: { a?: number; b?: number }) => { a?: number; b?: number }
>();
