// Write a solution that creates an array of the values of name property from each object in the users array.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(element => element.name)
console.log(names);