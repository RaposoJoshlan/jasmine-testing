class Calculator {
    
    sumNumbers = numArray => {
        return numArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    };
}

module.exports = Calculator;