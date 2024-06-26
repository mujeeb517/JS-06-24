// Electricity calculation with GST 18%
/*
   slab1: 0 - 50: 2rs
   slab2: 51 - 100: 3rs
    101 - 200: 5rs
    >200: 7rs

    120
    500

    50: 2*50 = 100
   100: 3* 50 = 150
   20:  5*20  = 100
   ----------------
                350rs
                ---
*/


function addTax(amount) {
    return amount * 18 / 100;
}

function calcBill(units) {
    var amount = 0;

    if (units > 200) {
        var unitsConsumed = (units - 200);
        amount = 7 * unitsConsumed;
        units = units - unitsConsumed;
    }

    if (units > 100) {
        var unitsConsumed = (units - 100);
        amount += 5 * unitsConsumed;
        // amount = amount +  (5 * (units - 100));
        units = units - unitsConsumed;
    }

    if (units > 50) {
        var unitsConsumed = (units - 50);
        amount += 3 * unitsConsumed;
        units = units - unitsConsumed;
    }

    if (units > 0) {
        amount += 2 * units;
    }

    var amountAfterTax = amount + addTax(amount);

    return amountAfterTax;
}

console.log(calcBill(250));
console.log(calcBill(50));
console.log(calcBill(251));