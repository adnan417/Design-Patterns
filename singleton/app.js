const Singleton = require("./singleton")

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2)