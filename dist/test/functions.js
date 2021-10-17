/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { nanoid } from 'nanoid';
// #region Configurations
export function generateTestTable(func, actuals, expecteds) {
    const out = actuals.map((_, index) => [
        actuals[index],
        expecteds[index],
    ]);
    return out;
}
export function generateAsyncTestTable(func, actuals, expecteds) {
    const out = actuals.map((_, index) => [
        actuals[index],
        expecteds[index],
    ]);
    return out;
}
function testNull(...actual) {
    const inner = actual == null ||
        actual === [null] ||
        actual === undefined ||
        actual === [undefined] ||
        actual.every(v => v == null || v === [null] || v === undefined || v === [undefined]);
    return inner;
}
export function mapperTest(spy, uuid = false) {
    return ([actual, expected]) => {
        const _actualText = testNull(...actual)
            ? actual[0]
            : actual.join(', ');
        return it(uuid
            ? `${nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`, () => {
            expect(JSON.stringify(spy(...actual))).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
export function mapperAsyncTest(spy, uuid = false) {
    return ([actual, expected]) => {
        const _actualText = testNull(...actual)
            ? actual[0]
            : actual.join(', ');
        return it(uuid
            ? `${nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`, async () => {
            const _processed = await spy(...actual);
            expect(JSON.stringify(_processed)).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
//#endregion
export function generateTests(func, actuals, expecteds, uuid = false) {
    const table = generateTestTable(func, actuals, expecteds);
    const spy = jest.fn(func);
    const mapper = mapperTest(spy, uuid);
    const tests = table.map(mapper);
    const len = expecteds.length;
    (() => it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    }))();
    return { tests, spy };
}
export function generateAsyncTests(func, actuals, expecteds, uuid = false) {
    const table = generateAsyncTestTable(func, actuals, expecteds);
    const spy = jest.fn(func);
    const mapper = mapperAsyncTest(spy, uuid);
    const tests = table.map(mapper);
    const len = expecteds.length;
    (() => it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    }))();
    return { tests, spy };
}
// #region Helper Functions - Sync
export function generate1Test(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate2Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate3Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate4Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
// TODO: Finish typing
export function generate5Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate6Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate7Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate8Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate9Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate10Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate11Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate12Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate13Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate14Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate15Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate16Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate17Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate18Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate19Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
export function generate20Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
// #endregion
// #region Helper Functions - Async
export function generateAsync1Test(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync2Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync3Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync4Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync5Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync6Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync7Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync8Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync9Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync10Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync11Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync12Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync13Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync14Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync15Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync16Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync17Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync18Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync19Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
export function generateAsync20Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
// #endregion
