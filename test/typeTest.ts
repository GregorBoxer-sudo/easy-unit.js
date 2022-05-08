import unit from '../index.js';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b - 1;

const test = new unit();

const assert = test.assert;

assert("addition", add(1, 2) === 2, "addition failed", {});
assert("subtraction", subtract(1, 2) === -1, "subtraction failed", {
    throwError: true
});

test.clear();

test.printResults(true);