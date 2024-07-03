// Write a function filterRangeInPlace(arr, a, b) that gets an arr and removes all values except those that are within the range of a and b. 
// This function should only modify the array and not return anything. When logged, the array should only include the values that fell in the specified range.

const array = [1,2,3,4,5,6,7,8,9,10];

function mutate(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if(value < a || value > b) {
            arr.splice(i, 1); 
            i--;
        }
    }
    return arr;
}

mutate(array, 3, 8);
console.log(array); 