console.groupCollapsed(`slide 13`);
console.title(`Object : Functions`)

function sayHello () {
  console.log(`Hello`);
}

// You can call a function by using the function name.
sayHello();




// you can provide arguments to a function by using the function name followed by parentheses.
function sayHelloTo (name, language) {
  if(language === `english`) {
    console.log(`Hello ${name}`);
  } else if(language === `french`) {
    console.log(`Bonjour ${name}`);
  } else if (language === `spanish`) {
    console.log(`Hola ${name}`);
  } else {
    console.log(name, `!`);
  }
}
sayHelloTo(`IT3049C Class`, `french`);
sayHelloTo();
// Notice how you didn't need to define the argument type. as you would in Java, C#, ...etc.


console.groupEnd(`slide 13`);