// callbacks: sequential execution
// country -> states -> city
// promises
function add(a, b, cb) {
    setTimeout(function () {
        var c = a + b;
        cb(c);
    }, 3000);
}

function sub(a, b, cb) {
    setTimeout(function () {
        var c = a - b;
        cb(c);
    }, 1000);
}

function mul(a, b, cb) {
    setTimeout(function () {
        var c = a * b;
        cb(c);
    }, 2000);
}


add(10, 20, res => {
    console.log('add finished');
    sub(res, 10, subRes => {
        console.log('mul is finished');
        mul(subRes, 10, mulRes => {
            console.log(mulRes);
        });
    });
});
