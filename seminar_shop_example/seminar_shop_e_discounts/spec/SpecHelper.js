beforeEach(function () {
    this.addMatchers({
        toBeTaxFree:function () {
            return this.actual.isTaxFree();
        },
        toHave3LetterDiscountGranted:function () {

            this.message = function () {
                return "Expected '" + this.actual + "' to " +
                    "return '" + !this.isNot + "' on #have3LetterDiscountGranted but got '" +
                    (this.actual.have3LetterDiscountGranted &&
                    this.actual.have3LetterDiscountGranted()) + "'";
            };

            return this.actual.have3LetterDiscountGranted();
        }

    });
});
