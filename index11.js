// nested functions
// method & function
// scoping rule
// readability
function fn() {
    console.log('outer');

    var fn2 = function () {
        console.log('inner');
    }

    fn2();
}


fn();
