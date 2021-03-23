describe("The fromWhere function" , function(){
    it("should return the name of the place for that registration number" , function(){
        assert.equal(fromWhere("CA"), "Cape Town");
    });

    it("should return the name of the place for that registration number" , function(){
        assert.equal(fromWhere("CJ"), "Paarl");
    });

    it("should return the name of the place for that registration number" , function(){
        assert.equal(fromWhere("GP"), "Some other place!");
    });
});