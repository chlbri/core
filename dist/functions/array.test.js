"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../test");
const array_1 = require("./array");
(0, test_1.generateTests)(array_1.isArray, [[1], [2], [[3, 4]], ['true'], [false]], [false, false, true, false, false]);
