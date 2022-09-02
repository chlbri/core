import { dequal } from 'dequal';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { nanoid } from 'nanoid';
import { log } from '../../src/functions';
import { LengthOf, ThenArg, TupleOf } from '../../src/types';
import { TestElement, TestTable } from './types';

// #region Configurations
export function generateTestTable<
  F extends (...args: any[]) => any,
  T1 extends ReadonlyArray<Parameters<F>>,
>(func: F, actuals: T1, expecteds: TupleOf<ReturnType<F>, LengthOf<T1>>) {
  const out = actuals.map((_, index) => [
    actuals[index],
    expecteds[index],
  ]);
  return out as TestTable<
    T1[number],
    TupleOf<ReturnType<F>, LengthOf<T1>>[number],
    LengthOf<T1>
  >;
}

export function generateAsyncTestTable<
  F extends (...args: any[]) => any,
  T1 extends ReadonlyArray<Parameters<F>>,
>(
  func: F,
  actuals: T1,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, LengthOf<T1>>,
) {
  const out = actuals.map((_, index) => [
    actuals[index],
    expecteds[index],
  ]);
  return out as TestTable<
    T1[number],
    TupleOf<ThenArg<ReturnType<F>>, LengthOf<T1>>[number],
    LengthOf<T1>
  >;
}

function testNullTest(...actual: any[]) {
  const inner =
    actual === null ||
    dequal(actual, [null]) ||
    actual === undefined ||
    dequal(actual, [undefined]) ||
    actual.every(
      v =>
        v == null ||
        dequal(v, [null]) ||
        v === undefined ||
        dequal(v, [undefined]),
    );
  return inner;
}

export function mapperTest<P extends any[], R extends any>(
  spy: jest.Mock<R, P>,
  uuid = false,
) {
  return ([actual, expected]: TestElement<P, R>) => {
    const _actualText = testNullTest(...actual)
      ? actual[0]
      : actual.join(', ');

    return it(
      uuid
        ? `${nanoid()} ===>  `
        : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`,
      () => {
        log(
          'test',
          uuid
            ? `${nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`,
        );
        expect(JSON.stringify(spy(...actual))).toStrictEqual(
          JSON.stringify(expected),
        );
        expect(spy).toBeCalledWith(...actual);
      },
    );
  };
}

export function mapperAsyncTest<P extends any[], R extends any>(
  spy: jest.Mock<R, P>,
  uuid = false,
) {
  return ([actual, expected]: TestElement<P, ThenArg<R>>) => {
    const _actualText = testNullTest(...actual)
      ? actual[0]
      : actual.join(', ');

    return it(
      uuid
        ? `${nanoid()} ===>  `
        : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`,
      async () => {
        log(
          'test',
          uuid
            ? `${nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`,
        );
        const _processed = await spy(...actual);
        expect(JSON.stringify(_processed)).toStrictEqual(
          JSON.stringify(expected),
        );
        expect(spy).toBeCalledWith(...actual);
      },
    );
  };
}

export function generateTests<
  F extends (...args: any[]) => any,
  T1 extends ReadonlyArray<Parameters<F>>,
>(
  func: F,
  actuals: T1,
  expecteds: TupleOf<ReturnType<F>, LengthOf<T1>>,
  uuid = false,
) {
  const table = generateTestTable(func, actuals, expecteds);
  const spy = jest.fn(func);
  const mapper = mapperTest(spy, uuid);
  const tests = table.map(mapper);
  const len = expecteds.length;

  it(`${func.name} should be call ${len} times`, () => {
    expect(spy).toBeCalledTimes(len);
  });
  return { tests, spy } as const;
}

export function generateAsyncTests<
  F extends (...args: any[]) => any,
  T1 extends TupleOf<Parameters<F>>,
  T2 extends TupleOf<ThenArg<ReturnType<F>>, LengthOf<T1>>,
>(func: F, actuals: T1, expecteds: T2, uuid = false) {
  const table = generateAsyncTestTable(func, actuals, expecteds);
  const spy = jest.fn(func);
  const mapper = mapperAsyncTest(spy, uuid);
  const tests = table.map(mapper);
  const len = expecteds.length;

  it(`${func.name} should be call ${len} times`, () => {
    expect(spy).toBeCalledTimes(len);
  });
  return { tests, spy } as const;
}

// #endregion
