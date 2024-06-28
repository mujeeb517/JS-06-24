// map : transform
var arr = [1, 2, 3, 4, 5];

function double(elem) {
    return elem * 2;
}

function triple(elem) {
    return elem += elem * 0.1;
}

var res = arr.map(triple);

// // double them
// var res = [];

// for (var i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 3);
// }

console.log(res);
