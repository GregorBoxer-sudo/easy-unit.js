import unit from '../index.js';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b - 1;

const test = new unit();

const assert = test.assert;

assert("addition", add(1, 2) === 3, "3 is the expected result");
assert("subtraction", subtract(1, 2) === -1, "1 is the expected result");

test.printResults(true);