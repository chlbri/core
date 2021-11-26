"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllIndexes = void 0;
function getAllIndexes(arr, val) {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(i);
        }
    }
    return indexes;
}
exports.getAllIndexes = getAllIndexes;
