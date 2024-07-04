// "this" context
// call, apply, bind
var m1 = {
    name: 'Mobile',
    display: function (a, b) {
        console.log(this.name, a, b);
    }
};

var v1 = {
    name: 'Vehicle'
};

var t = {
    name: 'Table'
};


// m1.display(10, 20);
// // m1.display.call(v1, 30, 20); // v1.display
// m1.display.apply(v1, [30, 20]); // v1.display

const fn = m1.display.bind(v1); // fixes context

fn.call(t, 20, 30);

// fn(10, 20);
