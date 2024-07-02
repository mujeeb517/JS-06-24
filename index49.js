// recursion: function calling itself
// by reducing the input size
// base condition

// iterative paradigm
// recursive paradigm
// factorial 
// n! = n * (n-1)!
// n! = n * (n-1) * (n-2)!
// n! = n * (n-1) * (n-2) .... * 1
// tracing
// function fact(n) {
//     if (n === 1) return 1;

//     return n * fact(n - 1);
// }

// var res = fact(5);
// console.log(res);

// print n to 1 using recursion 
// given n, print 1 to n using recursion

// function printRec(n) {
//     if (n === 0) return;

//     console.log(n);
//     printRec(n - 1);
// }


// 1 to n
function printRec(n) {
    if (n === 0) return;

    printRec(n - 1);
    console.log(n);
}

printRec(10);