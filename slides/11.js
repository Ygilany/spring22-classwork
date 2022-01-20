console.groupCollapsed(`slide 11`);
console.title(`Objects: Arrays`)
const carModels = [ "Ford", "Chevy", "Honda", "Toyota"]

// You can access an array element by using bracket notation.
console.log(`The first element in the array is ${carModels[0]}`);


// you can find out the number of elements in an array using the length property.
console.log(`The number of elements in the array is ${carModels.length}`);

// You can add elements to an array using the push() method.
carModels.push("Tesla");
console.log(`after adding Tesla, the length is: ${carModels.length}`);

// Array Concatenation
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
const array4 = [...array1, ...array2];

console.log(array3);
console.log(array4);

// More Methods can be found here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Some of these methods we'll need when you do loops.
console.groupEnd(`slide 11`);