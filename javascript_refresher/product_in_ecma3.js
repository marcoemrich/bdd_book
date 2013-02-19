(function () {
    "use strict";

    var Product = function (name) { this.name = name; }
    Product.prototype.showName = function () { alert(this.name); };

    var myProduct = new Product("Super Fancy TV");
    myProduct.showName();
})();