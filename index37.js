// 4. class
// blue print
// parent, child
// derived, base
// derived, super
class BaseMobile {
    constructor() {
        console.log("parent");
        this.brand = 'Apple';
        this.model = 'Iphone 13';
    }
}

class Mobile extends BaseMobile {
    constructor(color) {
        super();
        // initialization
        console.log('init');
        this.width = 5;
        this.height = 10;
        this.color = color;
    }

    call() {
        console.log('calling...');
    }
}

var m1 = new Mobile('Red');

console.log(m1.toString());