// Arithmatic operators: number

// var x = 11;

// var res = x % 2 === 0;

// console.log(res);

// given a students marks in 6 subjects, calculate his aggregate percentage
var s1 = 60;
var s2 = 70
var s3 = 40;
var s4 = 55;
var s5 = 60;
var s6 = 80;

var marksSecured = s1 + s2 + s3 + s4 + s5 + s6;
var maxMarks = 6 * 100;

var agg = (marksSecured / maxMarks) * 100;

console.log(agg);

var x = 100;
// post increment
// pre increment
var y = x++;

// pre: increment first, assign next
// post: assign first, increment next

console.log(x, y);