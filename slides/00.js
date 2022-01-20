// Utilities to help with the presentation

// overload console.log to print colored text
console.red = function(text) {
  console.log(`%c${text}`, `color: red`);
}

console.green = function(text) {
  console.log(`%c${text}`, `color: green`);
}

console.yellow = function(text) {
  console.log(`%c${text}`, `color: yellow`);
}

console.title = function(text) {
  console.log(`%c${text}`, 'color: rgb(145, 65, 0); font-size: 1.2em; font-weight: bold;');
}