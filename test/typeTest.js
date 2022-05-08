"use strict";
exports.__esModule = true;
var index_js_1 = require("../index.js");
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b - 1; };
var test = new index_js_1["default"]();
var assert = test.assert;
assert("addition", add(1, 2) === 2, "addition failed", {});
assert("subtraction", subtract(1, 2) === -1, "subtraction failed", {
    throwError: true
});
test.clear();
test.printResults(true);
