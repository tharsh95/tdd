const sum = require('./sum')

test("Adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
test("Adds two strings", () => {
  expect(sum("1", "2")).toBe(3);
});
test("Adds two strings separated with a new line", () => {
  expect(sum("1", "2")).toBe(3);
});
test("Passed one argument", () => {
  expect(sum("")).toBe(0);
});
test("Passed Empty string", () => {
  expect(sum("")).toBe(0);
});

