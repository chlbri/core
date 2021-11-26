"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareShallowArray = exports.sliceArray = exports.isArray = void 0;
const nullish_1 = require("./nullish");
const object_1 = require("./object");
function isArray(value) {
    return value instanceof Array;
}
exports.isArray = isArray;
function sliceArray(array, splicer) {
    const arr = [...array];
    return new Array(Math.ceil(array.length / splicer))
        .fill(arr)
        .map(() => arr.splice(0, splicer).map(val => (isArray(val) ? val[0] : val)));
}
exports.sliceArray = sliceArray;
function compareShallowArray(arg1, arg2) {
    if ((0, nullish_1.isNullish)(arg2) || (0, nullish_1.isNullish)(arg1)) {
        return true;
    }
    if (arg2.length > arg1.length)
        return false;
    let out = true;
    for (let index = 0; index < arg2.length; index++) {
        const el1 = arg1[index];
        const el2 = arg2[index];
        out = (0, object_1.dataCompare)(el1, el2);
        if (!out) {
            break;
        }
    }
    return out;
}
exports.compareShallowArray = compareShallowArray;
