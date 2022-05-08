/*----------------------------------*/
/* Copyright 2022 Gregor Katzschner */
/*----------------------------------*/

type Assertion = {
    name: string,
    condition: boolean,
    message: string
}

type AssertOptions = {
    throwError?: boolean,
    callback?: (condition: boolean) => void
}

declare class Tester {

    assertions: Assertion[];

    assert  (name: string, condition: boolean, message: string, options?: AssertOptions): void;

    clear (): void;

    getResults (): Assertion[];

    printResults (detailed?: boolean, emptyLine?: boolean): void;

}

export default Tester;