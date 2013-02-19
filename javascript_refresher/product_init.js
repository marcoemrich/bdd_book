(function() {
"use strict";

var Product = {
    _price: 0,
    _name: '',

    init: function(name, price) {
        this._name = name;
        this._price = price;
        return this;
    },
    price:    function()  {return this._price;},
    name:     function()  {return this._name;},
    setPrice: function(p) {this._price = p;},
    setName:  function(n) {this._name  = n;}
};

var aProduct = Object.create(Product).init('Grindle 3', 99.50);
console.log(aProduct);

})();