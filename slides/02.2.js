console.groupCollapsed(`slide 02.2`);
// Potential Bug: Re-Declaring a variable

// Remember: if a file is imported into HTML, variables are accessible to all files.
// This is how we're doing this presentation, we're importing multiple files.
console.green(`aVariable2 is not defined in this file, but we still can access it`)
console.log(aVariable2)


console.red(`Re-Declaring variables`)
// let aVariable = `re-declaring aVariable that used let`; // this is not acceptable
var aVariable2 = `re-declaring aVariable2 that used var`;
console.log(aVariable2)


// one file may unintentionally overwrite the variables of another file.

console.groupEnd(`slide 02.2`);