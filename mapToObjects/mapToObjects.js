// given an array of objects that have properties (name, surname, id), create a new array of objects that have properties (fullname, id), where fullname is derived from name + surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

const usersMapped = users.map(function(element) {
    let obj = {}; 
    obj.fullName = element.name + ' ' + element.surname;
    obj.id = element.id; 
    return obj;
});

console.log(usersMapped);