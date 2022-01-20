console.groupCollapsed(`slide 16.2`);
// Condition Evaluation
const legalAdultAge = 18;
const age = 17;

const isLegalAge = age >= legalAdultAge;

if (isLegalAge) { // no need for if (isLegalAge === true)
  console.log(`passes the legal age requirement`);
} else { // This evaluates to false
  console.log(`Not old enough`);
}

if ("Yahya") {
  console.log(`this will execute`)
}

console.groupEnd(`slide 16.2`);