// Write a function that takes an array of user objects and returns the average age. 

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    const totalYears = arr.reduce(function (accumulator, item) {
        return accumulator + item.age
    }, 0);
    return totalYears / arr.length;
}

getAverageAge(arr);