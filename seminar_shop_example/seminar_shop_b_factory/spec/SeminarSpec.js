describe("Seminar", function() {
    it('should have a price', function() {
        var seminar = SeminarFactory.create({price: 499.99});
        expect(seminar.netPrice()).toEqual(499.99);
    });

    it('should have a name', function() {
        var seminar = SeminarFactory.create({name: 'JavaScript-Basics'});
        expect(seminar.name()).toEqual('JavaScript-Basics');
    });

    it('should have a gross_price that adds 20% VAT to the net price', function() {
        var seminar = SeminarFactory.create({price: 100});
        expect(seminar.grossPrice()).toEqual(120);
    });
});

var SeminarFactory = {
    create: function(overwrites) {
        var defaults = {name: "JavaScript-Basics", price: 500};
        var values = Object.extend(defaults, overwrites);
        return Seminar.create(values.name, values.price);
    }
};


Object.extend = function(obj, props) {
    for (var prop in props) { obj[prop] = props[prop]; }
    return obj;
};