const sumAllMultiplesOf3And5SmallerThanValue = require("./sumServices");

test(`should return the sum of all numbers smaller than the informed number
    when parameter is a valid number`, () => {
  expect(sumAllMultiplesOf3And5SmallerThanValue(10)).toBe(23);
  expect(sumAllMultiplesOf3And5SmallerThanValue(11)).toBe(33);
  expect(sumAllMultiplesOf3And5SmallerThanValue(0)).toBe(0);
  expect(sumAllMultiplesOf3And5SmallerThanValue(1)).toBe(0);
  expect(sumAllMultiplesOf3And5SmallerThanValue(2)).toBe(0);
  expect(sumAllMultiplesOf3And5SmallerThanValue(3)).toBe(0);
  expect(sumAllMultiplesOf3And5SmallerThanValue(20)).toBe(78);
  expect(sumAllMultiplesOf3And5SmallerThanValue(50)).toBe(543);
});

test("should return undefined when parameter is a negative number", () => {
  expect(sumAllMultiplesOf3And5SmallerThanValue(-5)).toBe(undefined);
  expect(sumAllMultiplesOf3And5SmallerThanValue(-1)).toBe(undefined);
  expect(sumAllMultiplesOf3And5SmallerThanValue(-450)).toBe(undefined);
  expect(sumAllMultiplesOf3And5SmallerThanValue(-1000)).toBe(undefined);
});

test("should return undefined when parameter is not a number", () => {
  expect(sumAllMultiplesOf3And5SmallerThanValue("test string")).toBe(undefined);
  expect(sumAllMultiplesOf3And5SmallerThanValue(true)).toBe(undefined);
  expect(sumAllMultiplesOf3And5SmallerThanValue({})).toBe(undefined);
  expect(sumAllMultiplesOf3And5SmallerThanValue([])).toBe(undefined);
});
