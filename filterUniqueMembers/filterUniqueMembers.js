// Create a function that returns an array of unique elements from an input array.

const colors = ['red', 'red', 'blue', 'blue', 'blue', 'green', 'green', 'green', 'green', 'green', 'green']; // ['red','blue','green']

function uniqueMembers(array) {
    let output = []; 
    array.map( (element, index, array) => {
        if(!output.includes(element)) {
            output.push(element);
        }
    });
    return output;
}

uniqueMembers(colors); 