console.groupCollapsed(`slide 04`);
// String Concatenation

// Back-ticks 
const aString4 = `You could embed ${aConstant} or ${aVariable} in a string`;
console.log(`aString4: ${aString4}`);

// Double quotes/single quotes with the "+" sign
const aString5 = "Instead of having to do this "+ aConstant + ' or ' + aVariable;
console.log(`aString5: ${aString5}`);


// Remember:
const number1AsString = `1`;
const number2AsString = `2`;
const aString6 = number1AsString + number2AsString;
console.log(`aString6: ${aString6}, typeof: ${typeof aString6}`);

console.groupEnd(`slide 04`);