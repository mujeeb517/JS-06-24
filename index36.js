// JS modes: Strict and sloppy ES5

// 1. throw error when you try to update readonly property
// 2. no undeclared variables
// 3. no duplicate params 


// var m1 = Object.create({}, {
//     width: { value: 5 },
//     height: { value: 10 },
//     PI: { value: 3.14, writeable: false }
// });

function fn(a, b) {
    'use strict';
    console.log(a + b);
}


function fn2(a,b){
    'use strict';
    console.log(a+b);
}

fn(10,20);
fn2(10,20);

// m1.PI = 5.15;

// console.log('PI', m1.PI);