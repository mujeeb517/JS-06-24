// filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// return all even elements
// var res = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         res.push(arr[i]);
//     }
// }
//

// predicate
function isEven(elem, index) {
    return elem % 2 === 0;
}

function isOdd(elem) {
    return elem % 2 !== 0;
}

var res = arr.filter(isEven);
var res2 = arr.filter(isOdd);
console.log(res);