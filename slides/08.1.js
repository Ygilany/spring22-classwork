console.groupCollapsed(`slide 08.1`);
// How to add Numbers that are stored or received as Strings

console.title(`Numbers Casting`)
// Casting
const aString9 = "2.9";
const aString10 = "3.2";

const aString11 = aString9 + aString10;
console.log(`aString11: ${aString11}`);


// Casting using Number()
const aNumber13 = Number(aString9) + Number(aString10);
console.log(`aNumber13: ${aNumber13}`); // 5.5

// Casting using parseFloat()
const aNumber15 = parseFloat(aString9) + parseFloat(aString10);
console.log(`aNumber15: ${aNumber15}`);

// Casting using parseInt()
const aNumber14 = parseInt(aString9) + parseInt(aString10);
console.log(`aNumber14: ${aNumber14}`); // 5 - the result is a integer addition




console.groupEnd(`slide 08.1`);