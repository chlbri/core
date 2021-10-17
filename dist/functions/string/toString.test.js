"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../../test");
const toString_1 = require("./toString");
(0, test_1.generateTests)(toString_1.toString, [[1], [2], [3, 4], ['true'], [false]], [['1'], ['2'], ['3', '4'], ['true'], ['false']]);
