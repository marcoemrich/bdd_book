describe("ThreeLetterDiscount", function() {
    var seminar, discount;

    beforeEach(function() {
        seminar = {name: null, originalPrice: null};
        discount = ThreeLetterDiscount.forSeminar(seminar);
    });

    it('should have a seminar', function() {
        expect(discount.seminar()).toEqual(seminar);
    });

    it('should grant the discount for 3 letter seminars', function() {
        spyOn(seminar, "name").andReturn("BDD");
        console.log(seminar);
        expect(discount.granted()).toBeTruthy();
    });

    it('should not grant the discount for seminars with more than 3 letters', function() {
        spyOn(seminar, "name").andReturn("JavaScript-Basics");
        expect(discount.granted()).toBeFalsy();
    });

    it('should return the percentage 5% if granted', function() {
        spyOn(discount, "granted").andReturn(true);
        expect(discount.percentage()).toEqual(5);
    });

    it('should have a value of $10 for a 3-Letter-Seminar of $ 200', function() {
        spyOn(discount, "percentage").andReturn(5);
        spyOn(seminar, "originalPrice").andReturn(200);
        expect(discount.value()).toEqual(10);
    });


});