// reduce
var arr = [1, 2, 3, 4, 5, 6];

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

function calc(acc, elem) {
    return acc + elem;
}

var sum = arr.reduce(calc);

console.log(sum);

// myMap
// myFilter
// clone

// recursion
// ES6
// this
// modules
// sync, async