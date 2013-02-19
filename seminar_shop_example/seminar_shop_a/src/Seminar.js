var VAT_RATE = 1.2;

var Seminar = {
    create: function(name, price, taxFree) {
        return Object.create(Seminar).init(name, price, taxFree);
    },

    init: function(name, price) {
        this._price = price;
        this._name = name;
        return this;
    },

//    name:  function() {return this._name;},
    netPrice: function() {return this._price;},
    grossPrice: function() {return this.netPrice() * VAT_RATE;}
//    toString: function()   {return '#<Seminar ' + this._name + ' >';}
};
