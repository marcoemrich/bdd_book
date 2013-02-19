describe("Seminar", function() {
    it('should have a price', function() {
        var seminar = SeminarFactory.create({price: 499.99});
        expect(seminar.netPrice()).toEqual(499.99);
    });

    it('should have a name', function() {
        var seminar = SeminarFactory.create({name: 'JavaScript-Basics'});
        expect(seminar.name()).toEqual('JavaScript-Basics');
    });

    it('should have a gross_price that adds the VAT to the net price', function() {
        var seminar = SeminarFactory.create({price: 100});
        expect(seminar.grossPrice()).toEqual(100 * VAT_RATE);
        //TRADEOFF: better Maintenance than to hardcode 20%, but duplicate of implementation, chance of duping a bug
        //simple case: so you get away with the last one
    });
});

describe("A tax-free Seminar", function() {
    var seminar;

    beforeEach(function() { seminar = SeminarFactory.create({taxFree: true}); });

    it('should be tax-free', function() {
        expect(seminar).toBeTaxFree();
    });

    it('should have a gross_price equal to the net price', function() {
        expect(seminar.grossPrice()).toEqual(seminar.netPrice());
    });

});

var SeminarFactory = {
    create: function(overwrites) {
        var defaults = {name: "JavaScript-Basics", price: 100, taxFree: false};
        var values = Object.extend(defaults, overwrites);
        return Seminar.create(values.name, values.price, values.taxFree);
    }
};

Object.extend = function(obj, props) {
    for (var prop in props) { obj[prop] = props[prop]; }
    return obj;
};