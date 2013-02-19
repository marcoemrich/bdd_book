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
        get price() {return this._price;},
        get name()  {return this._name;},
        set price(p) {
            if (p <= 0) {
                throw new Error("Price must be positive");
            }
            this._price = p;
        },
        set name(n) {this._name = n;}
    };

    window.aProduct = Object.create(Product).init('Grindle 3', 99.50);
    console.log(window.aProduct);

})();