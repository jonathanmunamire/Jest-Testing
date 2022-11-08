const {stringLength} = require("./index.js");

test("Return String Length", () => {
    //Arrange
    const stringTest = "Jonathan";
    //Act
    const result = stringLength(stringTest);
    //Assert
    expect(result).toBe(8);
});