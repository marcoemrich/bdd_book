var VAT_RATE = 1.2;

var Seminar = {
    DISCOUNT_PERCENTAGE: 5,

    create: function(name, price, taxFree) {
        return Object.create(Seminar).init(name, price, taxFree);
    },

    init: function(name, price, taxFree) {
        this._price = price;
        this._name = name;
        this._taxFree = taxFree;
        return this;
    },

    name:       function() {return this._name;},
    netPrice:   function() {return this._price - this.discount();},
    grossPrice: function() {
        return this.netPrice() * (this.isTaxFree() ? 1 : VAT_RATE);
    },
    isTaxFree:  function() {return this._taxFree;},

    have3LetterDiscountGranted: function () {
        return this._name.length <= 3;
    },

    discountPercentage: function() {
        return this.have3LetterDiscountGranted() ? this.DISCOUNT_PERCENTAGE : 0;
    },

    discount: function() { return this.discountPercentage() / 100 * this._price;},

    toString:   function() {return '[Seminar "' + this._name + '"]';}
};