console.group(`slide 17.6`);

// Create an array based on another array 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersSquared = numbers.map(number => number * number);

console.log(`original Array not modified: ${numbers}`);
console.log(`new Array: ${numbersSquared}`);

console.groupEnd(`slide 17.6`);