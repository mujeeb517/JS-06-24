// ES6: default parameters
// ES6: prop/obj destructering
// ES6: array destructering

// function add(a, b = 0) {
//     return a + b;
// }

// console.log(add(10,20));

var mobile = {
    width: 5,
    height: 10,
    color: 'Red',
    info: {
        brand: 'Apple'
    }
};

// var width = mobile.width;
// var height = mobile.height;
// var color = mobile.color;

const { width: w, height, color, info: { brand } } = mobile;

console.log(w, height, color, brand);


const arr = [10, -2, -5, 100, 20];

// const first = arr[0];
// const second = arr[1];

const [f, s, t] = arr;

console.log(f, s, t);