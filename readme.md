# easy-unit.js
The easy unit test!

## quickstart
```javascript
    
    // import
    import unit from 'easy-unit.js';

    // define functions we want to test
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b - 1;
    
    // initialize tester
    const test = new unit();
    
    // rescope assert in form of new function
    const assert = test.assert;
    
    // assert both functions - see how one fails
    assert("addition", add(1, 2) === 3, "3 is the expected result");
    assert("subtraction", subtract(1, 2) === -1, "1 is the expected result");
    
    // print the result
    test.printResults(true);

```