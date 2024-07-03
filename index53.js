// Error/exception handling
// try catch finally throw
// unhandled exception
// db 
// file
// web svc calls
// clean up
// try {
//     // var y = 1;
//     y = y + 10;
//     console.log(y);
//     console.log("hello");
//     console.log("hello2");
//     console.log("hello3");
// } catch (err) {
//     console.log('error occurred');
// } finally {
//     console.log('finally');
// }

function fn1() {
    var y = 1;
    y = y + 1; // exception
}

function fn2() {
    var x = 1;
    x = x + 1; // exception
}

function fn() {
    try {
        fn1();
        fn2();
    } catch (err) {
        console.log(err);
    } finally {
        console.log('finally')
    }
}

fn();

// function printAge(age) {
//     if (age < 0) {
//         throw new Error('Invalid age');
//     } 
//         console.log(age, 'years');
// }

// try {
//     printAge(20);
// } catch (err) {
//     console.log(err.message);
// }