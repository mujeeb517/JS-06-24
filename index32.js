var x = 10;

// dictionary 
var mobile = {
    width: 5,
    height: 10,
    color: 'Black',

    // method
    print: function () {
        console.log('Printing...');
    }
};


var m1 = {}; // truthy, falsy: false, 0, "", null, undefined, NaN

// access
//  2 ways
// dot notation
// bracket notation
//mobile.color = "red";

// mobile["color"] = "Red";

// console.log(mobile["print"]);

// mobile.print();
mobile['print']();

// add prop
mobile.brand = 'Apple';
mobile.model = 'Iphone 15';

// delete prop
delete mobile.width;

console.log(mobile);