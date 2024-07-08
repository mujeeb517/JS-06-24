// async: Error handling
// entity 2
function addAsync(a, b, cb) {
    setTimeout(() => {
        if (a === 0) {
            cb('Invalid input', null);
        } else {
            a++;
            b++;
            var c = a + b;
            cb(null, c);
        }
    }, 2000);
}


// entity 1
addAsync(10, 200, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});