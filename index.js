/*----------------------------------*/
/* Copyright 2022 Gregor Katzschner */
/*----------------------------------*/

import chalk from "chalk";
import logSymbols from "log-symbols";

class Tester {

    tests = [];

    /**
     * Create a new test object and add it to the list of tests.
     * @param name - the name of the test
     * @returns The function returns the newly created test object.
     */
    newTest = (name) => {
        this.tests.push(new Test(name));
        return this.tests[this.tests.length - 1];
    }

    /**
     * Given a test name, return the test result object.
     * @param name - the name of the test
     * @returns The function returns the test result object.
     */
    getResultOfTest(name) {
        return this.tests.find(test => test.name === name);
    }

    /**
     * Given a test name, clear the test.
     * @param name - the name of the test to clear
     */
    clearTest(name) {
        const test = this.getResultOfTest(name);
        if (test) {
            test.clear();
        }
    }

    /**
     * This function clears the tests array.
     */
    clear() {
        this.tests = [];
    }

    /**
     * Given a test name, remove that test from the test suite.
     * @param name - the name of the test to remove
     */
    removeTest(name) {
        const test = this.getResultOfTest(name);
        if (test) {
            this.tests = this.tests.filter(test => test.name !== name);
        }
    }

    printResults(detailed = false, emptyLine = true) {
        if (emptyLine) {
            console.debug("");
        }
        console.debug(chalk.green("Tests:"));
        this.tests.forEach(test => {
            test.printResults(detailed, emptyLine);
        })
        console.debug("");
        // print summar
        let failedTests = 0;
        let passedTests = 0;
        let failedAssertions = 0;
        let passedAssertions = 0;
        this.tests.forEach(test => {
            let failed = 0;
            let passed = 0;
            test.assertions.forEach(assertion => {
                if (assertion.condition) {
                    passed++;
                } else {
                    failed++;
                }
            })
            passedAssertions += passed;
            failedAssertions += failed;
            if (failed > 0) {
                failedTests++;
            } else {
                passedTests++;
            }
        })
        console.debug(chalk.grey("Tests:"));
        console.debug("   ", chalk.green(`Passed: ${passedTests}`));
        console.debug("      ", chalk.grey(`assertions: ${passedAssertions}`));
        console.debug("   ", chalk.red(`Failed: ${failedTests}`));
        console.debug("      ", chalk.grey(`assertions: ${failedAssertions}`));
        console.debug("");
        if (failedTests > 0) {
            console.debug(chalk.red(`Tests failed!`));
        } else {
            console.debug(chalk.green(`Tests passed!`));
        }
        if (emptyLine) {
            console.debug("");
        }
    }
}

class Test {

    constructor(name) {
        this.name = name;
    };

    name;
    assertions = [];

    /**
     * Assert that a condition is true.
     * @param name - the name of the assertion
     * @param condition - the condition to test
     * @param message - the message to display if the condition is false
     * @param [options.callback] - a callback to invoke if the condition is true
     * @param [options.throwError] - if true, throw an error if the condition is false
     * @returns The function returns true or false depending on whether the condition is true.
     */
    assert = (name, condition, message, options = { callback: null, throwError: false }) => {
        console.debug(`assertion: ${name}`);
        if (!condition) {
            console.debug("   ", logSymbols.error, chalk.grey(`failed`));
            console.debug("   ", chalk.red(message));
            if (options.throwError) {
                throw new Error(message);
            }
        } else {
            console.debug("   ", logSymbols.success, chalk.grey(`passed`));
        }
        if (options.callback) callback(condition);
        this.assertions.push({
            name,
            condition,
            message
        });
    }

    /**
     * This function clears the assertions array.
     */
    clear = () => {
        this.assertions = [];
    }

    /**
     * This function returns the results of the assertions.
     * @returns The function returns an array of results.
     */
    getResults = () => {
        return this.assertions;
    }

    /**
     * Prints the results of the assertions.
     * @param [detailed=false] - If true, the function will print the name of each test and whether it passed or failed.
     * @param [emptyLine=true] - If true, the function will print an empty line before printing the results.
     */
    printResults = (detailed = false, emptyLine = true) => {
        let results = this.getResults();
        let passed = 0;
        let failed = 0;
        results.forEach(result => {
            if (result.condition) {
                passed++;
            } else {
                failed++;
            }
        });
        if (emptyLine) {
            console.debug("");
        }
        console.debug(chalk.cyanBright(`Test: ${this.name}`));
        console.debug(chalk.grey("assertions"));
        console.debug(chalk.gray(`   ` + `${results.length} done`));
        console.debug(chalk.green(`   ` + `${passed} passed`));
        console.debug(chalk.red(`   ` + `${failed} failed`));
        if (detailed) {
            console.debug("");
            results.forEach(result => {
                console.debug(chalk.grey(`[${results.indexOf(result)+1}] ${result.name}`));
                if (result.condition) {
                    console.debug(chalk.green(`   ` + logSymbols.success, chalk.grey("passed")));
                } else {
                    console.debug(chalk.red(`   ` + logSymbols.error, chalk.grey("failed")));
                    console.debug("   ", chalk.red(result.message));
                }
                if (results.indexOf(result) !== results.length - 1) {
                    console.debug("");
                }
            });
            console.debug("");
            if (failed > 0) {
                console.debug(chalk.red(`${failed} out of ${results.length} assertions failed`));
            } else {
                console.debug(chalk.green("All assertions passed!"));
            }
        }
        if (emptyLine) {
            console.debug("");
        }
    }
}

export default Tester;