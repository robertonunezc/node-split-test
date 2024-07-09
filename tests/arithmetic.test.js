// tests/arithmetic.test.js
const { add, subtract, multiply } = require('../src/math');
const timestamp = () => new Date().toISOString();

beforeAll(() => {
    console.log(`[${timestamp()}] Starting arithmetic tests`);
  });

test('adds 1 + 2 to equal 3', () => {
    console.log(`[${timestamp()}] Running add test`);

    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    console.log(`[${timestamp()}] Running add test`);

    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
    console.log(`[${timestamp()}] Running add test`);

    expect(multiply(3, 4)).toBe(12);
});
