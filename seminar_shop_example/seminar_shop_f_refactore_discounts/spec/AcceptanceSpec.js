describe("A 3-letter-Seminar that is priced $200", function() {

    it('should have a net price of $190', function() {
        var seminar = SeminarFactory.create({name: "BDD", price: 200});
        expect(seminar.netPrice()).toEqual(190);
    });

});