console.groupCollapsed(`slide 08.3`);
console.title(`Built-in Properties and Methods`)

const someString1111 = "Hello World";
console.log(someString1111.toUpperCase());

console.green(`Static Methods`);
// an Example of Static Methods is:
// Number.parseFloat()

const someString = "1.2";
const numberParsedFloat = Number.parseFloat(someString);
console.log(`someNumber: ${numberParsedFloat}`);




console.green(`Instance Methods`);
// an Example of Instance Methods is:
// Number.prototype.toFixed()
const someNumber2 = 1.23456789;
const numberToFixed = someNumber2.toFixed(2);
console.log(`numberToFixed: ${numberToFixed} - ${typeof numberToFixed}`);

// 🤔: What do we need to do do make the above of type number?


// Number.prototype.toExponential()
const someNumber3 = 123456789;
const numberToExponential = someNumber3.toExponential(2);
console.log(`numberToExponential: ${numberToExponential} - ${typeof numberToExponential}`);


console.groupEnd(`slide 08.3`);