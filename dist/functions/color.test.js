"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../test");
const color_1 = require("./color");
describe('Function rgba ======================================>', () => {
    (0, test_1.generateTests)(color_1.rgba, [
        [3, 34, 53, 99],
        [16, 56, 2, 3],
    ], ['rgba(3,34,53,99)', 'rgba(16,56,2,3)']);
});
describe('colorHex1 ============================================>', () => {
    (0, test_1.generateTests)(color_1.colorHex1, [
        [3, 'f', 'e'],
        [1, 'f', 2, 3],
    ], ['#3fe', '#1f23']);
});
describe('colorHex2 ==============================================>', () => {
    (0, test_1.generateTests)(color_1.colorHex2, [
        ['03', 'ff', 'e5'],
        ['13', 'ff', 'f8', '09'],
    ], ['#03ffe5', '#13fff809']);
});
