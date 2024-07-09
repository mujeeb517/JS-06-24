// Promises: parallel execution

function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b);
        }, 3000);
    })
}

function subAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a - b);
        }, 2000);
    })
}

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a * b);
        }, 1000);
    })
}

subAsync(30, 20).then(res => console.log('sub', res));
addAsync(10, 20).then(res => console.log('add', res));
mulAsync(10, 20).then(res => console.log('mul', res));