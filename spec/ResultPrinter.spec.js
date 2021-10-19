const ResultPrinter = require('../src/ResultPrinter')

class TestCalculator {

    sumNumbers = () => { };
}

describe(`Testing Result Printing`, () => {
    it(`See if the calculator's sumNumbers method is called by getResult`, () => {
        //Arrange
        const resultPrinter = new ResultPrinter();
        const calculator = new TestCalculator();
        const sumSpy = spyOn(calculator, `sumNumbers`).and.returnValue(6);        
        
        //Act
        const result = resultPrinter.getResult(calculator.sumNumbers());
        console.log(result);

        //Assert
        expect(sumSpy).toHaveBeenCalledTimes(1);

    });
});