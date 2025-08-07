const Person = require('./person');

const person = new Person('John Doe', 30);

const newPerson = person.clone();

console.log(person);
console.log(newPerson);