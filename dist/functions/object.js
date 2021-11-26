"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataCompare = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const dequal_1 = require("dequal");
const _1 = require(".");
const array_1 = require("./array");
function dataCompare(arg1, arg2) {
    if ((0, _1.isNullish)(arg2))
        return true;
    if (typeof arg1 !== 'object' || typeof arg2 !== 'object') {
        return arg1 === arg2;
    }
    if ((0, array_1.isArray)(arg1) || (0, array_1.isArray)(arg2)) {
        return (0, array_1.compareShallowArray)(arg1, arg2);
    }
    const _arg2 = Object.entries({ ...arg2 })
        .filter(([, value]) => !(0, _1.isNullish)(value))
        .reduce((prev, [key, value]) => {
        prev[key] = value;
        return prev;
    }, {});
    const keys2 = Object.keys(_arg2);
    if (!keys2.length) {
        return true;
    }
    const _arg1 = Object.entries({ ...arg1 })
        .filter(([key]) => {
        return keys2.includes(key);
    })
        .reduce((prev, [key, value]) => {
        prev[key] = value;
        return prev;
    }, {});
    return (0, dequal_1.dequal)(_arg1, _arg2);
}
exports.dataCompare = dataCompare;
