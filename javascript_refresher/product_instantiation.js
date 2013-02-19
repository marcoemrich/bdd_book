(function() {
"use strict";

var Product = {
    _price: 0,
    _name: '',

    price:    function()  {return this._price;},
    name:     function()  {return this._name;},
    setPrice: function(p) {this._price = p;},
    setName:  function(n) {this._name  = n;}
};

var product1 = Object.create(Product);
product1.setName('Grindle 3');
product1.setPrice(99.50);

var product2 = Object.create(Product);
product2.setName('yPhone 7');
product2.setPrice(599.00);

console.log(Product);
console.log(product1);
console.log(product2);

})();