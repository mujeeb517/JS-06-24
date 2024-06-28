// list of products
// scalar
// complex 
var p1 = {
    brand: 'Apple',
    model: 'Iphone 13',
    price: 800,
    inStock: true
};
var p2 = {
    brand: 'Apple',
    model: 'Iphone 14',
    price: 900,
    inStock: true
};
var p3 = {
    brand: 'Apple',
    model: 'Iphone 15',
    price: 1000,
    inStock: false
};

var products = [p1, p2, p3];

// operations
// give me all the products which are in stock
// map, filter, reduce
for (var i = 0; i < products.length; i++) {
    var currentProdct = products[i];

    if (currentProdct.inStock === true) {
        console.log(currentProdct);
    }
}
