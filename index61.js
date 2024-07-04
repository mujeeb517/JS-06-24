// this keyword
// java: this always refer to current object

/*
"this" context
  1. m1.method() this refers to the current object (m1)
  2. extract m1.method: this refers to the global object
  3. extract m1.method: this refers to undefined in strict mode
  4. inside function: this refers to the global object
  5. inside function: this refers to undefined  in strict mode
  6. inside nested method: this refers to the global object
  7. inside nested method: this refers to undefined  in strict mode
  8. inside nested arrow function: this refers to the current object in both modes
*/

// 'use strict';

var m1 = {
    name: 'Mobile',
    display: function () {
        const nested = () => console.log(this);
    
        nested();
    }
}

m1.display();

// var fn = m1.display;

// fn();


function fn() {
    function fn2() {
        console.log(this);
    }

    fn2();
}

fn();
