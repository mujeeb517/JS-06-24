var obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    length: 5,
};

const res = [].slice.apply(obj, [0, 3]);
console.log(res);


// var arr = ['zero', 'one', 'two', 'three', 'four'];

// var res = arr.slice(0, 3);

