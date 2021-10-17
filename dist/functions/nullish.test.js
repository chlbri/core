"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../test");
const nullish_1 = require("./nullish");
(0, test_1.generateTests)(nullish_1.isNullish, [[undefined], ['e'], [null], [7]], [true, false, true, false]);
