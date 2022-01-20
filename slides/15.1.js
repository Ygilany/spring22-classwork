console.groupCollapsed(`slide 15.1`);
// Since functions are objects, 
// they can be assigned to variables.
// We call those anonymous functions.
const greet1 = function (name=`World`) {
  console.log(`Hello ${name}`);
}
greet1()

const greet2 = (name=`World`) => {
  console.log(`Hello ${name}`);
}
greet2()

// you could also use arrow functions
const greet3 = (name=`World`) => {
  console.log(`Hello ${name}`);
}

// for one-line functions, you can omit the curly braces and the return statement.
const greet4 = (name=`World`) => console.log(`Hello ${name}`);

const greet5 = name => console.log(`Hello ${name}`);

console.groupEnd(`slide 15.1`);