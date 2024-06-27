var baseMobile = {
    color: 'Black',
    call: function () {
        console.log('calling....');
    }
};


// Object.create
var m1 = Object.create(baseMobile, {
    width: { value: 5, writable: true, enumerable: true, configurable: false },
    height: { value: 10, writable: true, enumerable: true },
    PI: { value: 3.14, writable: false, enumerable: false, configurable: false } // readonly
});

m1.call = function () {
    console.log('call version2');
}

// Object.defineProperty(m1, 'PI', {
//     writable: true,
//     enumerable: true
// });

// m1.PI = 5.15;

// console.log('PI', m1.PI);

// for (var key in m1) {
//     console.log(key + ':' + m1[key]);
// }

m1.call();
console.log(m1.color);
console.log(m1.toString());