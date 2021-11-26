"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferences = void 0;
const getIndexes_1 = require("./getIndexes");
function getReferences(args) {
    const names = new Set(args);
    const out = {};
    names.forEach(name => {
        const indexes = (0, getIndexes_1.getAllIndexes)(args, name);
        out[name] = indexes;
    });
    return out;
}
exports.getReferences = getReferences;
