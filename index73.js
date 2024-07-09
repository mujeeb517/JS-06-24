// async await
function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => res(a + b), 3000);
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

async function init() {
    const addRes = await addAsync(10, 20);
    const subRes = await subAsync(addRes, 10);
    const mulRes = await mulAsync(subRes, 10);
    console.log(addRes, subRes, mulRes);
}

init();
