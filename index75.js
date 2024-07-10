// IIFE: controls variable scope
(function(){
    var x = 10;
    x++;

})();


console.log(x); // x is not accessible here