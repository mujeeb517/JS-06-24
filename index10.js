// function declaration
// function expression
// hoisting

// function add(a, b) {
//     var c = a + b;
//     console.log(c);
//     return c;
// }

var add = function (a, b) {
    var c = a + b;
    console.log(c);
    return c;
}

// add(10, 200);

var x = 10;

console.log(typeof add);
console.log(typeof x);



