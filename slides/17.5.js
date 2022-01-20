console.groupCollapsed(`slide 17.5`);
/*
const carModels = [ "Ford", "Chevy", "Honda", "Toyota", "Tesla"]
*/

// Array Built-in method: `forEach`
carModels.forEach(carModel => {
  console.log(`The element in the array is ${carModel}`);
})

// Array Built-in method: `map`
const carModelsMap = carModels.map(carModel => {
  console.log(`The element in the array is ${carModel}`);
});

// This is not the intended use of the `map` method.
// The `map` method is used to create a new array from an existing array.
const stringifiedArrayOfCarModels = carModels.map(carModel => {
  return `Select ${carModel}`;
});
console.log(stringifiedArrayOfCarModels);

console.groupEnd(`slide 17.5`);