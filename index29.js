// Given a number return whether it's a prime number

// summary
// Installations
// Create & execution of JS code
// Output statement
// variables
// Data types (Arrays)
// Operators
// Conditional 
// Loops
// Objects
// Story or Task


// input: number
// output: boolean
// definition: A number which has exactly two factors, 1 and itself
// factor: if a number x divides y completely then x is said to be a factor y
// example: 2, 3, 5, 7, 11
// !example: 1, 4, 6, 9, 
// Cyrptography
function isPrime(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    return count === 2;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(11));