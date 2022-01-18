console.log(`Hello World`);
const variableName = "Hello World Hello World Hello World Hello \
World Hello World Hello World Hello World Hello World Hello World\
 Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ";
const variableName2 = 'this isn\'t a string';
const variableName3 = `Hello Worldkjahskjdfhlkasdf
akdsfhlkjahsdlkfjh
asdfkjgahlsdkfhjlksjhdflkhgkj`;

const user = {
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

const users = [user, user2];

console.log(user.age)
console.log(user2)

console.log(users)


console.log(`traditional way`)
for (let i = 0; i < users.length; i++) {
  console.log(users[i].username);
}

console.log(`new way`)
for (let user of users) {
  console.log(user.username);
}

const arrayOfNumbers = [4, 5, 6, 9, 10];
for(let number of arrayOfNumbers) {
  console.log(number);
}
console.log(`---------`)
for(let numberIndex in arrayOfNumbers) {
  console.log(arrayOfNumbers[numberIndex]);
}

