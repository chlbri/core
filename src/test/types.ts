import { TupleOf } from '../types';

export type TestElement<T1 = any, T2 = any> = [T1, T2];

export type TestTable<
  T1 = any,
  T2 = any,
  N extends number = number,
> = TupleOf<TestElement<T1, T2>, N>;

export type ReturnTests<N extends number> = TupleOf<void, N>;

export type ReturnGeneratorTests<N extends number> = {
  tests: ReturnTests<N>;
  spy: jest.Mock;
};
