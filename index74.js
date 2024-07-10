// IIFE: Immediately invoked function expression

function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => res(a + b), 1000);
    });
}

(async function () {
    const res = await addAsync(10, 20);
    console.log(res);
})();
