// Task: Translate border-left-width to borderLeftWidth. Write a function that converts dash seperated words into camelCase. 

function kebabToCamel(str) {
    const split = str.split('-'); 
    const camelCased = split.map( (element, index, array) => {
        if(index === 0) {
           return element.toLowerCase(); 
        } else if(index !== 0) {
            return element.charAt(0).toUpperCase() + element.slice(1);
        }
    }); 
    const joined = camelCased.join(''); 
    console.log(joined);
}

kebabToCamel('border-left-width');

// split the input string into an array.
// iterate over each array element using the map method: 
    // if the element's index is 0, lowercase all of it's characters
    // else, uppercase the first character and lowercase the rest
    // join new array