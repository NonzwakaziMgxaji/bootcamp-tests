describe("The transportFee function" , function(){
    it("should return the right price based on the shift you're working" , function(){
        assert.equal(transportFee("afternoon"), "R10");
    });

    it("should return the right price based on the shift you're working" , function(){
        assert.equal(transportFee("morning"), "R20");
    });

    it("should return the right price based on the shift you're working" , function(){
        assert.equal(transportFee("night"), "free");
    });
});