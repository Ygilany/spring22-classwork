console.groupCollapsed(`slide 14`);
// you can also define arguments with default values.
function sayHelloToWithDefault (name = `World`) {
  console.log(`Hello ${name}`);
}
sayHelloToWithDefault(`IT3049C`);
sayHelloToWithDefault();

function sayHelloToWithDefault2 (name= `World`, language = `english`) {
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

sayHelloToWithDefault2(`IT3049C Class`, `french`); // Bonjour IT3049C Class
sayHelloToWithDefault2(`IT3049C Class`); // Hello IT3049C Class
sayHelloToWithDefault2(); // Hello world

console.groupEnd(`slide 14`);