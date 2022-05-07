# easy-unit.js
The easy unit test!

## quickstart
```javascript
    const UTest = require('easy-unit.js');

    // initialize new tester
    const Tester = new UTest();
    
    // test
    Tester.assert("add", 1 + 2, 2, "1 + 1 should be 2");
    
    // print results combined
    Tester.printResultsDetailed();
```