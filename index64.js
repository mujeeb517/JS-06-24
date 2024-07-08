// async JS
// async * sync
// sync: no delay 
// real life: sync tasks and async tasks
// async tasks: DB, web svc call, timers, events 
function add(a, b) {
    a++;
    b++;
    var c = a + b;
    return c;
}

var res = add(10,20);
console.log(res);

// setTimeout(() => console.log('fn executed'), 3000);
setInterval(() => console.log(new Date()), 1000);