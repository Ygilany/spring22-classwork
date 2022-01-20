console.groupCollapsed(`slide 17.4`);
/*
const carModels = [ "Ford", "Chevy", "Honda", "Toyota", "Tesla"]
*/
// `for` Loop
for (let i = 0; i < carModels.length; i++) {
  console.log(`The ${i+1} element in the array is ${carModels[i]}`);
}

// `for..of` Loop
for (let carModel of carModels) {
  console.log(`The element in the array is ${carModel}`);
}

// `for..in` loop
for (let index in carModels) {
  console.log(`The element in the array is ${carModels[index]}`);
}

console.groupEnd(`slide 17.4`);