console.groupCollapsed(`slide 09`);

// JavaScript Types: Boolean
console.title(`Booleans`)
const aBoolean1 = true;
const aBoolean2 = false;
console.log(`${aBoolean1} is a ${typeof aBoolean1}`);
console.log(`${aBoolean2} is a ${typeof aBoolean2}`);

// comparing values Strict vs Loose
const numericalValue = 1;
const numericalValueInString = "1";

const comparison1 = numericalValue == numericalValueInString;
console.log(comparison1); // true
const comparison2 = numericalValue === numericalValueInString;
console.log(comparison2); // false

// JS Equality table on: https://dorey.github.io/JavaScript-Equality-Table/

console.groupEnd(`slide 09`);