const UTest = require('../index.js');

const Tester = new UTest();

Tester.assert("add", 1 + 2, 2, "1 + 1 should be 2");

Tester.printResultsDetailed();