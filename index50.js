// state management 
// given an array return whether an element exist
// linear search
// arr: [1,2,3,4,5,6,7,8] k = 5
function search(arr, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === k) return true;
    }

    return false;
}


// global variable
// var i = 0;
// // linear search recursion 
// function searchRec(arr, k) {
//     if (i === arr.length) return false;

//     if (arr[i] === k) return true;
//     i++;
//     return searchRec(arr, k);
// }


// local variable
// linear search recursion 
function searchRec(arr, k, i) {
    if (i === arr.length) return false;

    if (arr[i] === k) return true;
    return searchRec(arr, k, i + 1);
}


var res = searchRec([10, -4, 5, 8, 100, 20], -4, 0);
console.log(res);