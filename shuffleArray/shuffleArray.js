// Write a function that randomly shuffles - reorders - elements in an array.

let arr = [1,2,3];

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return arr;
}