// given a number return whether it's a even number
// input: number
// output: boolean
// even: number which is fully divisble by 2
// ex: 2, 4, 6, 8, 10..
// odd ex: 1,3,5,7

// 100: even

// signature
// refactor
function isEven(n) {
    var rem = n % 2;
    return rem === 0;
    // return rem === 0 ? true : false;
    // if (rem === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

var res = isEven(51);
console.log(res);