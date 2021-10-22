"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../test");
const log_1 = require("./log");
(0, test_1.generateTests)(log_1.log, [[1], [2], [3, 4], ['true'], [false]], [undefined, undefined, undefined, undefined, undefined]);
