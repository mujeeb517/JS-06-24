// Template
// 1. object literals
// 2. Constructor function (pascal casing)
// 3. Object.create (advanced)
// 4. Class keyword


var x = 10; // 64bits, 8bytes

// plan
// instance: object
function Mobile(color) {
    // props
    // state
    // data
    this.width = 5; // 8 bytes
    this.height = 10; // 8 bytes
    this.color = color; // 8 bytes

    // methods: common
    // behavior
    // operations
    // this.print = function () { // 8 bytes
    //     console.log('printing..');
    // }
}

Mobile.prototype.PI = 3.14;

Mobile.prototype.print = function () { // 8 bytes
    console.log('printing..');
};

var m = new Mobile('Red');
var m2 = new Mobile('Color');
var m3 = new Mobile('Blue');

console.log(m.PI, m2.PI, m3.PI);