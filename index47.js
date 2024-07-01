// myFilter
function myFilter(fn) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        var ret = fn(this[i]);
        if (ret) {
            res.push(arr[i]);
        }
    }
    return res;
}

Array.prototype.myFilter = myFilter;

var arr = [1, 2, 3, 4, 5, 6];

function isEven(elem) {
    return elem % 2 === 0;
}

// predicate
function isOdd(elem) {
    return elem % 2 !== 0;
}

var res = arr.myFilter(isOdd);
console.log(res);