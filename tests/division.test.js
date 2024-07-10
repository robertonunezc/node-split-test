// tests/division.test.js
const { divide } = require('../src/math');
const timestamp = () => new Date().toISOString();

beforeAll(() => {
    console.log(`[${timestamp()}] Starting division tests`);
  });

test('divides 8 / 2 to equal 4', () => {
    console.log(`[${timestamp()}] Running divide test`);

    expect(divide(8, 2)).toBe(4);
});
test('divides 8 / 1 to equal 8', () => {
    console.log(`[${timestamp()}] Running divide test`);

    expect(divide(8, 1)).toBe(8);
});


test('divides by 0 to throw error', () => {
    console.log(`[${timestamp()}] Running divide test`);

    expect(() => divide(8, 0)).toThrow('Cannot divide by zero');
});
