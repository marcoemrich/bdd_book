var Product = {
    _VAT_RATE: 1.20,

    create: function(name, price) {
        return Object.create(this).init(name, price);
    },

    init: function(name, price) {
        this._name  = name;
        this._price = price;
        return this;
    },

    grossPrice: function() {
        return this._price * this._VAT_RATE;
    }
};


