// callback -> promise -> async await
function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a === 0) rej('Invalid input');
            else res(a + b);
        }, 1000);
    });
}

// addAsync(10, 20).then(res => console.log('res', res)).catch();

async function init() {
    try {
        const res = await addAsync(10, 20);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

init();