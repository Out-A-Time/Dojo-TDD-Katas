const isLeapYear = require("./02_LeapYear");

test("When year passed, expecting to get true if divisible by 4", () => {
  expect(isLeapYear(1996)).toBe(true);
});

test("When year passed, expecting to get true if divisible by 400", () => {
  expect(isLeapYear(1600)).toBe(true);
});

test("When year passed, expecting to be false if not divisible by 4 or 400", () => {
  expect(isLeapYear(1997)).toBe(false);
});

test("When year passed, expecting to be false if not divisible by 4 or 400", () => {
  expect(isLeapYear(1800)).toBe(false);
});
