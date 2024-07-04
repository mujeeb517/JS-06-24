// ES6: arrow function
// anonymous function
function add(a, b) {
    return a + b;
}

const fn = (a, b) => a + b;


var res = fn(10, 20);
console.log(res);


function fn1() {
    console.log('fn1');
}

() => console.log('fn1');


function add2(a) {
    console.log('adding');
    return a + 10;
}

const x = a => {
    console.log('adding');
    return a + 10;
}

x(10);