console.groupCollapsed(`slide 02.1`);

// Constants
console.title(`Constants`);

const aConstant = `This shouldn't change over the course of the program`;

console.log(aConstant);


// Variables
console.title(`Variables`)
// Variables are declared with the keyword `let` and `var`.
let aVariable = `prefer let over var`;
var aVariable2 = `var  may introduce unintentional bugs`;

console.log(aVariable)
console.log(aVariable2)

// Re-assigning variables

// aConstant = 3; // this is not acceptable
aVariable = `aVariable has been reassigned`;
aVariable2 = `aVariable2 has been reassigned`;

console.green(`After reassignment`)
console.log(aVariable)
console.log(aVariable2)

console.groupEnd(`slide 02.1`);