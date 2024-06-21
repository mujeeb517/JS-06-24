// print all the even numbers from 1 to n
// 1 2 3 ... 100
// input: -
// output: all the even numbers

// function printEven(n) {
//     for (var i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// function printEven(n) {
//     for (var i = 2; i <= n; i = i + 2) {
//         console.log(i);
//     }
// }

// loops
// iteration
function printEven(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) continue;

        console.log(i);
    }
}

printEven(10);