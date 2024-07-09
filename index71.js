// Promises: sequentially 
// Country -> states -> cities
// Promise: chaining
function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a === 0) rej('Invalid input');
            else res(a + b);
        }, 3000);
    });
}

function subAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => res(a - b), 2000);
    });
}

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => res(a * b), 1000);
    });
}

// add -> sub -> mul -> print
// addAsync(10, 20)
//     .then(addRes => {
//         console.log('add finished');
//         subAsync(addRes, 10)
//             .then(subRes => {
//                 console.log('sub finished');
//                 mulAsync(subRes, 10)
//                     .then(mulRes => {
//                         console.log('mul finished');
//                         console.log(mulRes);
//                     });
//             });
//     });

addAsync(10, 20)
    .then(addRes => subAsync(addRes, 10))
    .then(subRes => mulAsync(subRes, 10))
    .then(mulRes => console.log(mulRes))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));