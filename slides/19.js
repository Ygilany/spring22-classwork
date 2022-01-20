console.groupCollapsed(`slide 19`);

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  reverseName() {
    return this.#reverseName2();
  }
  // private methods
  #reverseName2() {
    return this.fullName().split(` `).reverse().join(`, `);
  }

}

// Define an object
const John2 =new Person2('John',`Smith`);
const Jane2 =new Person2('Jane',`Doe`);

console.log(John2.fullName());
console.log(Jane2.reverseName());
// console.log(Jane2.#reverseName2());


console.groupEnd(`slide 19`);