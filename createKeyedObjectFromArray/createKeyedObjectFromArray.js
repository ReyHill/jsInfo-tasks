// Write a function that converts an input array into an object. the id's should be keys and array items themselves should be values.

let people = [
  {id: 'Thomas', age: 32},
  {id: 'Bill', age: 41},
  {id: 'Jean', age: 37},
  {id: 'Pete', age: 20}
]

function arrayToObject(array) {
  return array.reduce( (accumulator, item) => {
    accumulator[item.id] = item;
    return accumulator;
  },{});
}

arrayToObject(people);