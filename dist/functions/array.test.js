"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../test/functions");
const array_1 = require("./array");
(0, functions_1.generateTests)(array_1.isArray, [[1], [2], [[3, 4]], ['true'], [false]], [false, false, true, false, false]);
