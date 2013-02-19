describe("Seminar", function() {
    it('should have a name', function() {
        var seminar = Seminar.create('JavaScript-Basics', 499.99);
        expect(seminar.name()).toEqual('JavaScript-Basics');
    });

    it('should have a price', function() {
        var seminar = Seminar.create('JavaScript-Basics', 499.99);
        expect(seminar.netPrice()).toEqual(499.99);
    });

    it('should have a gross_price that adds 20% VAT to the net price', function() {
        var seminar = Seminar.create('JavaScript-Basics', 100);
        expect(seminar.grossPrice()).toEqual(120);
    });
});