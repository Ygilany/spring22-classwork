console.groupCollapsed(`slide 10`);

console.title(`Objects`)
let courseInfo = {
  name: "Web Game Development",
  code: "IT3049C",
  numberOfStudents: 30,
};

// Objects can be accessed by using dot notation.
console.log(`${courseInfo.name}'s code is ${courseInfo.code}`);

// Objects can be accessed by using bracket notation.
const courseCode = courseInfo["code"];
console.log(`${courseInfo["name"]}'s code is ${courseCode}`);


// Objects can contain other objects.
const instructor = {
  name: `Yahya Gilany`,
  teaches: [
    courseInfo
  ]
}
// In this case, I can drill down the object to access the name and code of the courseInfo object.
console.log(`
  ${instructor.name} teaches
  ${instructor.teaches[0].code}-${instructor.teaches[0].name}
`);

console.groupEnd(`slide 10`);