// ES6: ... (rest/spread)
// shallow cloning
var m1 = {
    width: 5,
    height: 10,
    color: 'Black',
    info: {
        brand: 'Apple'
    }
};

var m2 = { ...m1, color: 'Red' };

// console.log(m1.info === m2.info);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);


//...

function fn(x, a, b, c) {
    console.log(x, a, b, c);
}


const arr1 = [1, 2, 3, 4, 4, 5, 6];

// fn(arr1[0], arr1[1], arr1[2]);
fn(10, ...arr1);