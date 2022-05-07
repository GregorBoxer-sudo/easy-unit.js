/*----------------------------------*/
/* Copyright 2022 Gregor Katzschner */
/*----------------------------------*/

import chalk from "chalk";
import logSymbols from "log-symbols";

class Tester {

    tests = [];

    /**
     * Asserts that a condition is true.
     * @param name - the name of the assertion
     * @param condition - the condition to test
     * @param message - the message to display if the condition is not true
     */
    assert = (name, condition, message) => {
        console.debug(`assertion: ${name}`);
        if (!condition) {
            console.debug("   ", logSymbols.error, chalk.grey(`failed`));
            console.debug("   ", chalk.red(message));
        } else {
            console.debug("   ", logSymbols.success, chalk.grey(`passed`));
        }
        this.tests.push({
            name,
            condition,
            message
        });
    }

    /**
     * This function clears the tests array.
     */
    clear = () => {
        this.tests = [];
    }

    /**
     * This function returns the results of the tests.
     * @returns The function returns an array of results.
     */
    getResults = () => {
        return this.tests;
    }

    /**
     * Prints the results of the tests.
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
                console.debug(chalk.red("Some tests failed!"));
            } else {
                console.debug(chalk.green("Tests passed!"));
            }
        }
        if (emptyLine) {
            console.debug("");
        }
    }

    /**
     * Returns true if all the tests passed, otherwise returns false.
     * @returns The function returns true or false depending on whether all the tests passed.
     */
    getAllPassed = () => {
        let results = this.getResults();
        let passed = true;
        results.forEach(result => {
            if (!result.pass) {
                passed = false;
            }
        });
        return passed;
    };

}

export default Tester;