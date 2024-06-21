// nested loops

// for (var i = 0; i < 10; i++) { // 10 iterations m
//     for (var j = 0; ; j++) { // 10 iterations n  m * n
//         console.log(i, j);

//         if (j === 10) break;
//     }
// }

// multiplication table

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 10 = 10

// 2 * 1 

// 10 * 1 = 10
// 10 * 2 = 20

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        var str = i + ' * ' + j;
        console.log(str, i * j);
    }
    console.log();
}