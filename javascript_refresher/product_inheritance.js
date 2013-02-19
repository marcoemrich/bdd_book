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

var Book = Object.create(Product);
Book._author = null;
Book._numPages = null;
Book.setAuthor   = function(author) {this._author = author;};
Book.setNumPages = function(num_pages) {this._numPages = num_pages;};
Book.author      = function() {return this.author();};
Book.numPages    = function() {return this.numPages();};

console.log(Book);

})();

