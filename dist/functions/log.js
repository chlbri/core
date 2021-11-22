"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(name, data) {
    return console.log(name, '=>', JSON.stringify(data, null, 2));
}
exports.log = log;
