import unit from '../index.js';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b - 1;

const Tester = new unit();

const test = Tester.newTest("test");

test.assert("addition", add(1, 2) === 3, "addition failed");

const test2 = Tester.newTest("test2");

test2.assert("subtraction", subtract(1, 2) === -1, "subtraction failed");

Tester.printResults(true);