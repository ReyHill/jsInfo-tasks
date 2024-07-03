// Write a function that takes an array of user objects and sorts them by their age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortedArr = arr.sort(sorter); 

function sorter(a, b) {
    if(a.age > b.age) {
        return 1;
    } else if(a.age < b.age) {
        return -1;
    }
}

console.log(sortedArr);