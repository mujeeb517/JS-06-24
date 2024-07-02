// deep cloning
function clone(obj) {
    var res = {};

    for (var key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
            res[key] = clone(value);
        } else {
            res[key] = value;
        }
        // res.width = obj.width
    }

    return res;
}

var m1 = {
    width: 5,
    height: 10,
    color: 'Black',
    info: {
        brand: 'Apple',
        model: 'Iphone 14',
        l1: {
            prop: 'xyz'
        }
    }
};


var m2 = clone(m1);
m2.color = 'Red';
console.log(m1.info.l1 === m2.info.l1);