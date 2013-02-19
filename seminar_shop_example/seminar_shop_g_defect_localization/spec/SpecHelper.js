beforeEach(function () {
    this.addMatchers({
        toBeTaxFree:function () {
            return this.actual.isTaxFree();
        }

    });
});
