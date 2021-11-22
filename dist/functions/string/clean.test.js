"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../../test");
const clean_1 = require("./clean");
(0, test_1.generateTests)(clean_1.isClean, [
    ['hfjg@'],
    ['TEedfcxJF56ERT'],
    ['3'],
    ['false<<>'],
    ['#*'],
    ['fdkfghfghv'],
    ['GUYCVCCZ'],
], [false, true, true, false, false, true, true]);
