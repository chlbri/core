"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
// #region Sync
function dumpFunction1(val1, val2) {
    return val1 > val2;
}
function dumpFunction2(val1) {
    return val1 > 0;
}
const actuals1f1 = [
    [5, 6],
    [1, 0],
    [15, 37],
    [105, 100],
    [20, 3],
];
const actuals1f2 = [
    [-1],
    [1],
    [-15],
    [105],
    [20],
];
const actuals2f1 = [
    [5, 6],
    [15, 37],
    [24, 7],
]; /* as const */
const actuals2f2 = [[-5], [-15], [24]];
const expecteds1 = [
    false,
    true,
    false,
    true,
    true,
];
const expecteds2 = [false, false, true];
describe('Synchronous ==>', () => {
    describe('Generate the Table of Tests ==>', () => {
        const spy = jest.fn(functions_1.generateTestTable);
        it('For 5 elements ==>', () => {
            const actual = spy(dumpFunction1, actuals1f1, expecteds1);
            const expected = [
                [[5, 6], false],
                [[1, 0], true],
                [[15, 37], false],
                [[105, 100], true],
                [[20, 3], true],
            ];
            expect(actual).toStrictEqual(expected);
            expect(spy).toBeCalledWith(dumpFunction1, actuals1f1, expecteds1);
        });
        it('For 3 elements ==>', () => {
            const actual = spy(dumpFunction2, actuals2f1, expecteds2);
            const expected = [
                [[5, 6], false],
                [[15, 37], false],
                [[24, 7], true],
            ];
            expect(actual).toStrictEqual(expected);
            expect(spy).toBeCalledWith(dumpFunction2, actuals2f1, expecteds2);
        });
    });
    describe('Map all Tests ==>', () => {
        (() => describe(`Function ==> ${dumpFunction1}`, () => {
            const spy = jest.fn(dumpFunction1);
            const func = (0, functions_1.mapperTest)(spy);
            describe('For 5 elements ==>', () => {
                const table = (0, functions_1.generateTestTable)(dumpFunction1, actuals1f1, expecteds1);
                table.map(func);
            });
            describe('For 3 elements ==>', () => {
                const table = (0, functions_1.generateTestTable)(dumpFunction1, actuals2f1, expecteds2);
                table.map(func);
            });
        }))();
        (() => describe(`Function ==> ${dumpFunction2}`, () => {
            const spy = jest.fn(dumpFunction2);
            const func = (0, functions_1.mapperTest)(spy);
            describe('For 5 elements ==>', () => {
                const table = (0, functions_1.generateTestTable)(dumpFunction2, actuals1f2, expecteds1);
                table.map(func);
            });
            describe('For 3 elements ==>', () => {
                const table = (0, functions_1.generateTestTable)(dumpFunction2, actuals2f2, expecteds2);
                table.map(func);
            });
        }))();
    });
    describe('Generate all Tests ==>', () => {
        (() => describe(`Function ==> ${dumpFunction1}`, () => {
            describe('For 5 elements ==>', () => {
                (0, functions_1.generateTests)(dumpFunction1, actuals1f1, expecteds1);
            });
            describe('For 3 elements ==>', () => {
                (0, functions_1.generateTests)(dumpFunction1, actuals2f1, expecteds2);
            });
        }))();
        (() => describe(`Function ==> ${dumpFunction2}`, () => {
            describe('For 5 elements', () => {
                (0, functions_1.generateTests)(dumpFunction2, actuals1f2, expecteds1);
            });
            describe('For 3 elements ==>', () => {
                (0, functions_1.generateTests)(dumpFunction2, actuals2f2, expecteds2);
            });
        }))();
    });
});
// #endregion
// #region Async
function dumpAsyncFunction1(val1, val2) {
    return Promise.resolve(val1 > val2);
}
function dumpAsyncFunction2(val1) {
    return Promise.resolve(val1 > 0);
}
const asyncActuals1f1 = [
    [5, 6],
    [1, 0],
    [15, 37],
    [105, 100],
    [20, 3],
];
const asyncActuals1f2 = [
    [-1],
    [1],
    [-15],
    [105],
    [20],
];
const asyncActuals2f1 = [
    [5, 6],
    [15, 37],
    [24, 7],
]; /* as const */
const asyncActuals2f2 = [
    [-5],
    [-15],
    [24],
];
const asyncExpecteds1 = [
    false,
    true,
    false,
    true,
    true,
];
const asyncExpecteds2 = [false, false, true];
describe('Asynchronous ==>', () => {
    describe('Generate the Table of Tests ==>', () => {
        const spy = jest.fn(functions_1.generateTestTable);
        it('For 5 elements', () => {
            const actual = spy(dumpAsyncFunction1, asyncActuals1f1, asyncExpecteds1);
            const expected = [
                [[5, 6], false],
                [[1, 0], true],
                [[15, 37], false],
                [[105, 100], true],
                [[20, 3], true],
            ];
            expect(actual).toStrictEqual(expected);
            expect(spy).toBeCalledWith(dumpAsyncFunction1, asyncActuals1f1, asyncExpecteds1);
        });
        it('For 3 elements', () => {
            const actual = spy(dumpAsyncFunction2, asyncActuals2f1, asyncExpecteds2);
            const expected = [
                [[5, 6], false],
                [[15, 37], false],
                [[24, 7], true],
            ];
            expect(actual).toStrictEqual(expected);
            expect(spy).toBeCalledWith(dumpAsyncFunction2, asyncActuals2f1, asyncExpecteds2);
        });
    });
    describe('Map all Tests ==>', () => {
        (() => describe(`Function ==> ${dumpAsyncFunction1}`, () => {
            const spy = jest.fn(dumpAsyncFunction1);
            const func = (0, functions_1.mapperAsyncTest)(spy);
            describe('For 5 elements ==>', () => {
                const table = (0, functions_1.generateAsyncTestTable)(dumpAsyncFunction1, asyncActuals1f1, asyncExpecteds1);
                table.map(func);
            });
            describe('For 3 elements ==>', () => {
                const table = (0, functions_1.generateAsyncTestTable)(dumpAsyncFunction1, asyncActuals2f1, asyncExpecteds2);
                table.map(func);
            });
        }))();
        (() => describe(`Function ==> ${dumpAsyncFunction2}`, () => {
            const spy = jest.fn(dumpAsyncFunction2);
            const func = (0, functions_1.mapperAsyncTest)(spy);
            describe('For 5 elements ==>', () => {
                const table = (0, functions_1.generateAsyncTestTable)(dumpAsyncFunction2, asyncActuals1f2, asyncExpecteds1);
                table.map(func);
            });
            describe('For 3 elements ==>', () => {
                const table = (0, functions_1.generateAsyncTestTable)(dumpAsyncFunction2, asyncActuals2f2, asyncExpecteds2);
                table.map(func);
            });
        }))();
    });
    describe('Generate all Tests ==>', () => {
        (() => describe(`Function ==> ${dumpAsyncFunction1}`, () => {
            describe('For 5 elements ==>', () => {
                (0, functions_1.generateAsyncTests)(dumpAsyncFunction1, asyncActuals1f1, asyncExpecteds1);
            });
            describe('For 3 elements ==>', () => {
                (0, functions_1.generateAsyncTests)(dumpAsyncFunction1, asyncActuals2f1, asyncExpecteds2);
            });
        }))();
        (() => describe(`Function ==> ${dumpAsyncFunction2}`, () => {
            describe('For 5 elements ==>', () => {
                (0, functions_1.generateAsyncTests)(dumpAsyncFunction2, asyncActuals1f2, asyncExpecteds1);
            });
            describe('For 3 elements ==>', () => {
                (0, functions_1.generateAsyncTests)(dumpAsyncFunction2, asyncActuals2f2, asyncExpecteds2);
            });
        }))();
    });
});
// #endregion
