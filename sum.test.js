const sum = require('./sum')

test("Adds two strings", () => {
  expect(sum("1", "2")).toBe(3);
});
test("Adds two strings separated with a new line", () => {
  expect(sum("1\n2")).toBe(3);
});
test("Passed one argument", () => {
  expect(sum("1")).toBe(1);
});
test("Passed Empty string", () => {
  expect(sum("")).toBe(0);
});
test("Handle mutliple elements", () => {
  expect(sum("1","5","6")).toBe(12);
});
test("Handle delimiter", () => {
  expect(sum( "//;\n1;2")).toBe(3);
});
