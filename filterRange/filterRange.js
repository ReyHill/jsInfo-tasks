// Write a function filterRange(arr, a, b) that gets an arr, looks for elements with results higher than or equal to a and lower than or equal to b, and returns the results as an array.
// This function should not mutate the original array. 

let array = [1,2,3,4,5,6,7,8,9,10]; 

function filterRange(arr, a, b) {
    const filtered = arr.filter( (x) => x >= a && x <= b  )
    return filtered; 
}

filterRange(array, 4, 9);
console.log(array); 