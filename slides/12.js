console.groupCollapsed(`slide 12`);
/*
let courseInfo = {
  name: "Web Game Development",
  code: "IT3049C",
  numberOfStudents: 30,
};
*/

const webGameDevelopmentSchedule = {
  days: [`Tuesday`, `Thursday`],
  time: [`2:00PM`, `3:20PM`]
}

// you can modify existing objects by adding more properties.
console.green(`before`)
console.log(courseInfo);

console.green(`after`)
courseInfo.schedule = webGameDevelopmentSchedule;
console.log(courseInfo);


console.groupEnd(`slide 12`);