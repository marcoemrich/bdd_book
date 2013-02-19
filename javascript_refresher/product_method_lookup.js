(function () {
"use strict";

var Product = {
    init: function(name) {
        this._name = name;
        return this;
    },

    _name: '',
    name: function() { return this._name; },
    setName:function(name) { this._name = name; }
};

var Book = Object.create(Product).extend({
    init: function(name, author) {
        Product.init(name);
        this._author = author;
        return this;
    },

    _author: null,
    setAuthor: function(author) { this._author = author; },
    author: function() { return this.author(); }
});

var myBook = Object.create(Book).init('Lords of the Ring', 'J.R.R. Tolkien');
myBook.mostImportantHobbit = "Frodo";

console.Product(Book);
console.log(myBook);

})();