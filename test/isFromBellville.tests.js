describe("The isFromBellville function" , function(){
    it("should return true if registration number is for Bellville or starts with CY" , function(){
        assert.equal(isFromBellville("CY123"),true);
    });

});