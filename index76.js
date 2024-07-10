// closure
function counter(count) {
    function inc() {
        ++count;
        console.log(count);
    }

    return inc;
}

var inc = counter(100);
inc();
inc();
inc();
inc();
inc();
inc();