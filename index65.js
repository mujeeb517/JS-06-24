// Async: callbacks
// Async: db, timers, websvc, events
// JS: single threaded
// entity2:
function fnAsync(a, b, callback) {
    console.log('starting');
    setTimeout(function () {
        a++;
        b++;
        console.log('calculating');
        var c = a + b;
        console.log('calculated');
        callback(c);
    }, 3000);

    console.log('returning');
    // return undefined;
}


// entity1: 

fnAsync(10, 20, res => console.log('task is finished', res));

// processing

// amazon
// cc/dc
