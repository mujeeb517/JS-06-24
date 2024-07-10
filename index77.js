// revealing module pattern
function counter(count) {

    function xyz() {
        console.log('xyz');
    }

    function inc() {
        ++count;
        console.log(count);
    }

    function dec() {
        --count;
        console.log(count);
    }

    return {
        inc: inc,
        dec: dec,
    }
}

const obj = counter(100);


obj.inc();
obj.inc();
obj.inc();
obj.inc();

obj.dec();
obj.dec();
obj.dec();

obj.inc();
obj.inc();
obj.inc();

