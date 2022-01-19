// To print a message to the console:
console.log(`Hello World`);

// To have a multi-line text.
const variableName1 = "You can have a long string split over multiple lines in the code file. \
However, it's still presented as a single paragraph on the webpage. \
Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
Vestibulum euismod, nisl eget consectetur sagittis, nisl nunc consectetur nunc,\
eget aliquet nisl nunc eget lorem.";

// woes of using a single quotes for your strings
const variableName2 = 'if you\'re using a single quote to wrap your string, and want to use a comma, you\'ll need to use the escape character.';

// creating a json object (JavaScript Object Notation)
const user1 = {
  username: `John`,
  age: 31,
  dateOfBirth: "2019-01-01",
  isMarried: false
};

const user2 = {
  username: `Jane`,
  age: 20,
  dateOfBirth: "2019-01-01",
  isMarried: false,
}
// to print the objects
console.log(user1)
console.log(user2)

// create an array of objects
const users = [user1, user2];
console.log(users)

// to acccess object properties
console.log(user1.age)
console.log(user1[`age`])


// to loop over an array of object and print out the username property: method 1
console.log(`traditional way`)
for (let i = 0; i < users.length; i++) {
  console.log(users[i].username);
}

// to loop over an array of object and print out the username property: method 2
console.log(`new way`)
// using `of` will assign the value of the array item to the variable
for (let user of users) { 
  console.log(user.username);
}

// using `in` will assign the index of the value of the array item to the variable
for (let userIndex in users) {
  console.log(users[userIndex].username);
}

// Another example
const arrayOfNumbers = [4, 5, 6, 9, 10];
for(let number of arrayOfNumbers) {
  console.log(number);
}
console.log(`---------`)
for(let numberIndex in arrayOfNumbers) {
  console.log(arrayOfNumbers[numberIndex]);
}