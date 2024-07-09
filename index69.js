// Promise: token
// Pizz hut: pay bill -> token -> wait time -> notification
// success, error
// Promise states: Pending, Resolved, Rejected
// Promise caches the result
// catch block for error handling

// entity 1
function addAsync(a, b) {

    function prmsFn(res, rej) {
        setTimeout(() => {
            if (a === 0) {
                var err = new Error('Invalid input');
                rej(err);
            } else {
                var c = a + b;
                res(c);
            }
        }, 2000);
    }

    return new Promise(prmsFn);
}


// entity 2
var p = addAsync(0, 20);

p
    .then(res => console.log(res))
    .catch(err => console.log(err));
// p.then(res => console.log(res));
// p.then(res => console.log(res));
// p.then(res => console.log(res));