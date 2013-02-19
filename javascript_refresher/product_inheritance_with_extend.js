(function() {
"use strict";

Object.prototype.extend = function(props) {
    for (var prop in props) { this[prop] = prop; }
    return this;
};


var Product = {
    _price: 0,
    _name: '',

    price:    function()  {return this._price;},
    name:     function()  {return this._name;},
    setPrice: function(p) {this._price = p;},
    setName:  function(n) {this._name  = n;}
};

var Book = Object.create(Product).extend({
    _author: null,
    _numPages: null,
    setAuthor:   function(author) {this._author = author;},
    setNumPages: function(num_pages) {this._numPages = num_pages;},
    author:      function() {return this.author();},
    numPages:    function() {return this.numPages();}
});

console.log(Product);
console.log(Book);

})();