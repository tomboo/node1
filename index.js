// Module wrapper function
// function(exports, require, module, __filename, __dirname) {
// }

console.log(__filename);

const Person = require("./person");
// import Person from './person';  <-- NYI in Node.js

person1 = new Person('John Doe', 30);
person1.greeting();