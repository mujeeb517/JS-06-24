// shallow clone object
// var m1 = {
//     width: 5,
//     height: 10,
//     color: 'Black'
// };

// var m2 = m1; // reference

// m2.width = 100;

// console.log(m1, m2);
// shallow cloning
// deep cloning
function clone(obj) {
    var res = {};

    for (var key in obj) {
        var value = obj[key];
        res[key] = value;
    }

    return res;
}

var m1 = {
    width: 5,
    height: 10,
    color: 'Black',
    info: {
        brand: 'Apple',
        model: 'Iphone 13',
    }
};


var m1Clone = clone(m1);
console.log(m1Clone.info === m1.info);