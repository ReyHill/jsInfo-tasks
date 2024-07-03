// Write a function filterRangeInPlace(arr, a, b) that gets an arr and removes all values except those that are within the range of a and b. 
// This function should only modify the array and not return anything. When logged, the array should only include the values that fell in the specified range.

const array = [1,2,3,4,5,6,7,8,9,10];

// IF the current iteration is greater than and equal to a AND less than or equal to b NOT, 
    // splice this iteration from the array
// return the mutated array

function mutate(arr, a, b) {
    arr.forEach( (element, index, array) => {
        if(element >= a && element <= b) {
            console.log(element); 
        }
    })
}

mutate(array, 3, 8);