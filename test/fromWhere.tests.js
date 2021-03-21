describe("The fromWhere function" , function(){
    it("should return the name of the place for that registration number" , function(){
        assert.equal(fromWhere("CA"), "Cape Town");
    });
});