/*----------------------------------*/
/* Copyright 2022 Gregor Katzschner */
/*----------------------------------*/

const colors = require('colors');

class Tester {

    successfull = [];
    failed = [];

    /**
     * Asserts that the test value is equal to the expected value.
     * @param name - the name of the test
     * @param test - the value to test
     * @param expected - the expected value
     * @param [message] - an optional message to display if the test fails
     */
    assert = (name, test, expected, message) => {
        console.debug("Asserting: " + name);
        if (test === expected) {
            this.successfull.push({ name: name });
            console.debug(`${name} ${colors.green('OK')}`);
        } else {
            this.failed.push({ name: name, message: message });
            console.debug(`${name} ${colors.red('FAILED')} ${message}`);
        }
    }

    /**
     * Prints the results of the tests.
     */
    printResults = () => {
        console.debug("\nResults");
        console.debug("________");
        console.debug(`Tests run: ${this.successfull.length + this.failed.length}`);
        if (this.successfull.length > 0) {
            console.debug(`Successfull Assertions: ` + `${this.successfull.length}`.green);
        } else {
            console.debug(`Successfull Assertions: ` + `${this.successfull.length}`);
        }
        if (this.failed.length > 0) {
            console.debug(`Tests failed: ` + `${this.failed.length}`.red);
        } else {
            console.debug(`Failed Assertions: ${this.failed.length}`);
        }
        console.debug("\n");
    }

    /**
     * Prints the results of the test in detail.
     */
    printResultsDetailed = () => {
        this.printResults();
        console.debug("Details: ");
        // print asserts with names
        console.debug('________');
        this.successfull.forEach(x => {
            console.debug(`${x.name} ${colors.green('OK')}`);
        });
        if (this.failed.length > 0 && this.successfull.length > 0) console.debug("\n");
        this.failed.forEach(x => {
            console.debug(`${x.name} ${colors.red('Failed')}`);
            console.debug(`--> ${x.message}`);
            if (this.failed.indexOf(x) !== this.failed.length - 1) console.debug('\n');
        });
        console.debug(`\n`);
    };

    /**
     * clears tests
     */
    clear = () => {
        this.failed = [];
        this.successfully = [];
    };
}

module.exports = Tester;