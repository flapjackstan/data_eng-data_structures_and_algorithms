const MyClass = require('./src/TestClass.js')

let a = new MyClass("Elmer");

a.method_one()

console.log(a.name)

// wont work
console.log(a.#methodThree("is cool"))