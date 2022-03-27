const {sum, subtract, subtractAsync, sumAsync} = require('./math')

// result = sum(3, 7)
// expected = 10
// expect(result).toBe(expected);


// result = subtract(7, 3)
// expected = 4
// expect(result).toBe(expected);

test(`sum adds numbers`, ()=> {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected);  
})

test(`subtract subtracts numbers`, ()=> {
  const result = subtract(10, 7)
  const expected = 3
  expect(result).toBe(expected);  
})

test(`sumAsync sums numbers`, async ()=> {
  const result = await sumAsync(10, 7)
  const expected = 17
  expect(result).toBe(expected);  
})

test(`subtractAsync subtracts numbers`, async ()=> {
  const result = await subtractAsync(10, 7)
  const expected = 3
  expect(result).toBe(expected);  
})

test(`10 > 9`, () => {
  expect(10).toBeGreaterThan(9);
})
test(`11 > 10`, () => {
  expect(11).toBeGreaterThan(10);
})