describe('A Product', function() {

    it('should calculate its #grossPrice by adding a VAT of 20%', function() {
        product = Product.create('Some Product', 100)
        expect(product.grossPrice()).toEqual(120);
    });

});
