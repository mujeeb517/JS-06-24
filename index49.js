// recursion: function calling itself
// by reducing the input size
// base condition

// iteration
// function factIterative(n) {
//     var res = 1;
//     for (var i = 1; i <= n; i++) {
//         res = i * res;
//     }

//     return res;
// }


// var res = factIterative(4);


// recursion
function fact(n) {
    if (n === 1) return 1;

    return n * fact(n - 1);
}

var res = fact(4);
console.log(res);