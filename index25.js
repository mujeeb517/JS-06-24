// given an array of numbers return whether an element exist
// input: Array, k
// output: boolean

// [10,-1,50,-2,60,70,80]   -2, -3
// 
// function find(arr, elem) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === elem) {
//             return true;
//             // console.log('found');
//             // return;
//         }
//     }

//     return false;
// }

function find(arr, elem) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === elem) {
            return true;
            // console.log('found');
            // return;
        }
    }

    return false;
}

var res = find([10, -1, 50, -2, 60, 70, 80], -2);
console.log(res);
