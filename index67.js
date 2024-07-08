// callbacks: parallel execution
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

// independent functions
add(10, 20, res => console.log('add', res));
sub(20, 10, res => console.log('sub', res));
mul(10, 20, res => console.log('mul', res));