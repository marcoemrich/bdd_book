var VAT_RATE = 1.2;

var Seminar = {
    create: function(name, price, taxFree) {
        return Object.create(Seminar).init(name, price, taxFree);
    },

    init: function(name, price, taxFree) {
        this._price = price;
        this._name = name;
        this._taxFree = taxFree;
        this._discount = ThreeLetterDiscount.forSeminar(this);
        return this;
    },

    netPrice:   function() {return this._price - this._discount.value();},
    grossPrice: function() {
        return this.netPrice() * (this.isTaxFree() ? 1 : VAT_RATE);
    },
    originalPrice: function() {return this._price;},
    name:       function() {return this._name;},
    isTaxFree:  function() {return this._taxFree;},
    toString:   function() {return '#<Seminar "' + this._name + '">';}
};