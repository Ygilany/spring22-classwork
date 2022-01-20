console.groupCollapsed(`slide 15.2`);
// Since functions are objects, 
// they can be assigned to other object properties.

const person = {
  name: `Yahya Gilany`,
  email: `yahya.gilany@uc.edu`,
  sayHello: function(){ console.log(`Hello ${this.name}`) } 
}

person.sayHello();

console.groupEnd(`slide 15.2`);