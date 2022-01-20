console.groupCollapsed(`slide 06.4`)

console.red(`string.split(<separator>)`);
// string.split(<separator>)
// Splits a string into an array of substrings.
const helloWorldSplit1 = helloWorldString.split(``);
console.log(`"${helloWorldString}" is split with empty string = [${helloWorldSplit1}]`);


const helloWorldSplit2 = helloWorldString.split(` `);
console.log(`"${helloWorldString}" is split with a space = [${helloWorldSplit2}]`);

// CSV file 
const csvFile = `Yahya,Gilany,gilanyym,yahya.gilany@live.com`;

const splitCsv = csvFile.split(`,`);
console.log(`"CSV File is split with a comma = [${splitCsv}]`);


// More Methods can be found here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


console.groupEnd(`slide 06.4`)