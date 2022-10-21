const fizzbuzz = require("./01_FizzBuzz");

test("When 1 passed, expecting to get 1", () => {
  expect(fizzbuzz(1)).toBe(1);
});

test("When 2 passed, expecting to get 2", () => {
  expect(fizzbuzz(2)).toBe(2);
});

test("When 3 passed, expecting to get 'Fizz'", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test("When 5 passed, expecting to get 'Buzz'", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test("When 6 passed, expecting to get 'Fizz'", () => {
  expect(fizzbuzz(6)).toBe("Fizz");
});

test("When 9 passed, expecting to get 'Fizz'", () => {
  expect(fizzbuzz(9)).toBe("Fizz");
});

test("When 10 passed, expecting to get 'Buzz'", () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});

test("When 15 passed, expecting to get 'FizzBuzz'", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("When 25 passed, expecting to get 'Buzz'", () => {
  expect(fizzbuzz(25)).toBe("Buzz");
});
