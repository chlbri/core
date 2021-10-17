"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../test");
const identity_1 = require("./identity");
(0, test_1.generateTests)(identity_1.identity, [[1], [2], [3], [4], ['true'], [false]], [1, 2, 3, 4, 'true', false]);
