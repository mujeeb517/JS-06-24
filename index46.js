// myMap
var arr = [1, 2, 3, 4, 5];

function myMap(fn) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        var ret = fn(this[i]);
        res.push(ret);
    }

    return res;
}

function double(elem) {
    return elem * 2;
}

Array.prototype.myMap = myMap;

var res = arr.myMap(double);
console.log(res);


// var res = arr.map(function (elem) {
//     return elem * 2;
// })
