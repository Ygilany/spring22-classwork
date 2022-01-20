console.groupCollapsed(`slide 18`);
console.title(`Modules and Classes`)

function Person(_firstName,_lastName){
  const firstName = _firstName;
  const lastName =_lastName;

  const fullName = function(){
    return `${firstName} ${lastName}`;
  }

  const reverseName = function(){
    return reverseNameImplementation2();
  }

  const reverseNameImplementation1 = function(){
    return `${lastName}, ${firstName}`;
  }

  const reverseNameImplementation2 = function(){
    return fullName().split(` `).reverse().join(`, `);
  }

  return {
    fullName,
    reverseName
  }
}
// Define an object
const John =new Person('John',`Smith`);
const Jane =new Person('Jane',`Doe`);

console.log(John.fullName());
console.log(Jane.reverseName());
// console.log(Jane.reverseName2());


console.groupEnd(`slide 18`);