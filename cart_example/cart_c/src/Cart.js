var Cart = {
    create: function() { return Object.create(Cart).init(); },

    init: function() {
        this._items = [];
        return this;
    },

    numProducts: function() {return this._items.length;},
    doesContain: function(item) {return this._items.indexOf(item) !== -1;},
    add: function(item) {
        Stock.removeProduct(item.name);
        this._items.push(item);
    },

    grossPriceSum: function() {
        return this._items.map(function(i) { return i.grossPrice(); }).reduce(function(sum, p) {return sum + p;}, 0);
    }
};