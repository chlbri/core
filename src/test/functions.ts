import { nanoid } from 'nanoid';

import { LengthOf, ThenArg, TupleOf } from '../types';
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

function testNull(...actual: any[]) {
  const inner =
    actual == null ||
    actual === [null] ||
    actual === undefined ||
    actual === [undefined] ||
    actual.every(
      (v) =>
        v == null || v === [null] || v === undefined || v === [undefined],
    );
  return inner;
}

export function mapperTest<P extends any[], R extends any>(
  spy: jest.Mock<R, P>,
  uuid = false,
) {
  return ([actual, expected]: TestElement<P, R>) => {
    const _actualText = testNull(...actual)
      ? actual[0]
      : actual.join(', ');

    return it(
      uuid
        ? `${nanoid()} ===>  `
        : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`,
      () => {
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
    const _actualText = testNull(...actual)
      ? actual[0]
      : actual.join(', ');

    return it(
      uuid
        ? `${nanoid()} ===>  `
        : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`,
      async () => {
        const _processed = await spy(...actual);
        expect(JSON.stringify(_processed)).toStrictEqual(
          JSON.stringify(expected),
        );
        expect(spy).toBeCalledWith(...actual);
      },
    );
  };
}

export function returnSimpleData(data: any) {
  const { _id, ...out } = data;
  return out;
}
//#endregion


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
  (() =>
    it(`${func.name} should be call ${len} times`, () => {
      expect(spy).toBeCalledTimes(len);
    }))();
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
  (() =>
    it(`${func.name} should be call ${len} times`, () => {
      expect(spy).toBeCalledTimes(len);
    }))();
  return { tests, spy } as const;
}


// #region Helper Functions - Sync
export function generate1Test<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 1>,
  expecteds: TupleOf<ReturnType<F>, 1>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate2Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 2>,
  expecteds: TupleOf<ReturnType<F>, 2>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate3Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 3>,
  expecteds: TupleOf<ReturnType<F>, 3>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate4Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 4>,
  expecteds: TupleOf<ReturnType<F>, 4>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate5Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 5>,
  expecteds: TupleOf<ReturnType<F>, 5>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate6Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 6>,
  expecteds: TupleOf<ReturnType<F>, 6>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate7Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 7>,
  expecteds: TupleOf<ReturnType<F>, 7>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate8Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 8>,
  expecteds: TupleOf<ReturnType<F>, 8>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate9Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 9>,
  expecteds: TupleOf<ReturnType<F>, 9>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate10Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 10>,
  expecteds: TupleOf<ReturnType<F>, 10>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate11Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 11>,
  expecteds: TupleOf<ReturnType<F>, 11>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate12Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 12>,
  expecteds: TupleOf<ReturnType<F>, 12>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate13Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 13>,
  expecteds: TupleOf<ReturnType<F>, 13>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate14Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 14>,
  expecteds: TupleOf<ReturnType<F>, 14>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate15Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 15>,
  expecteds: TupleOf<ReturnType<F>, 15>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate16Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 16>,
  expecteds: TupleOf<ReturnType<F>, 16>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate17Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 17>,
  expecteds: TupleOf<ReturnType<F>, 17>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate18Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 18>,
  expecteds: TupleOf<ReturnType<F>, 18>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate19Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 19>,
  expecteds: TupleOf<ReturnType<F>, 19>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate20Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 20>,
  expecteds: TupleOf<ReturnType<F>, 20>,
  uuid = false,
) {
  return generateTests(func, actuals, expecteds, uuid);
}
// #endregion

// #region Helper Functions - Async
export function generateAsync1Test<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 1>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 1>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync2Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 2>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 2>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync3Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 3>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 3>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync4Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 4>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 4>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync5Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 5>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 5>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync6Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 6>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 6>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync7Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 7>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 7>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync8Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 8>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 8>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync9Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 9>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 9>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync10Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 10>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 10>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync11Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 11>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 11>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync12Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 12>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 12>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync13Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 13>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 13>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync14Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 14>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 14>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync15Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 15>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 15>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync16Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 16>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 16>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync17Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 17>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 17>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync18Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 18>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 18>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync19Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 19>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 19>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}

export function generateAsync20Tests<
  F extends (...args: any[]) => any,
>(
  func: F,
  actuals: TupleOf<Parameters<F>, 20>,
  expecteds: TupleOf<ThenArg<ReturnType<F>>, 20>,
  uuid = false,
) {
  return generateAsyncTests(func, actuals, expecteds, uuid);
}
// #endregion
