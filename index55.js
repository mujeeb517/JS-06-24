// ES6: string interpolation/multiline string
const person = {
    name: 'Xyz',
    age: 20,
    active: true
};

// var str = person.name +
//     ' is ' + person.age +
//     ' years old';

var str = `${person.name} is 
${person.age}
years old`;

console.log(str);


// var str2 = "this is line 1" +
//     "this is line 2" +
//     "this is line 3";

// var str3 = `this is line 1
// this is line 2
// this line 3`;