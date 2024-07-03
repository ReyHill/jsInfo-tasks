// create a function that returns a sorted array and does not mutate the original.

const originalArray = ['HTML','JAVASCRIPT','CSS']; // sort these so they become ['CSS','JAVASCRIPT','HTML']
const sortedAndCopied = sortedCopy(originalArray); 

function sortedCopy(originalArray) {
    return originalArray.toSorted(); 
}

console.log(originalArray);
console.log(sortedAndCopied);