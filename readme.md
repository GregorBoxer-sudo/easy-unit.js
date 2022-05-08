# easy-unit.js
The easy unit test!

## quickstart
```javascript
    
    // import
    import unit from 'easy-unit.js';

    // functions to test
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b - 1;
    
    // initiaize Tester
    const Tester = new unit();
    
    //  initialize Test
    const test = Tester.newTest("test");

    // assert addition    
    test.assert("addition", add(1, 2) === 3, "addition failed");
    
    // initialize Test
    const test2 = Tester.newTest("test2");
    
    // assert subtraction
    test2.assert("subtraction", subtract(1, 2) === -1, "subtraction failed");
    
    // print Results
    Tester.printResults(true);

```

## describtion

You need to initialize a Tester. A Tester will manage your tests. Then you need to create Tests and in each test you can assert. Lets say we got a function x to calculate something in range of 0 to 100. Then we would create a test and in this test we would assert the function with 0, 100 and something inbetween. For each function we create a test with multiple asserts.