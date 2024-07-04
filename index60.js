// arrow functions
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const res = arr.map(elem => elem * 2);
const res = arr.map(elem => elem * 3);

/*
    function triple(elem){
        return elem*3;
    }

*/

const even = arr.filter(elem => elem % 2 === 0);

/*
    function isEven(elem){
        return elem%2===0;
    }

*/

console.log(even);
