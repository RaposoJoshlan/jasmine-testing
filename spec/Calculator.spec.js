const Calculator = require('../src/Calculator');

describe(`Testing the Calculator summing`, () => {
    it(`Simple array returns 6`, () => {
        //Arrange
        const numberArray = [1, 2, 3];
        const calculator = new Calculator();
        //Act
        const result = calculator.sumNumbers(numberArray);
        //Assert
        expect(result).toBe(6);

    });
});
