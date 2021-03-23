describe("The regCheck function" , function(regNum, regPlate){
    it("should return true if registration number is for GP, L, EC, MP registration plates" , function(){
        assert.equal(regCheck("DV 23 NB GP" , "GP"), true);
    });

    it("should return true if registration number is for GP, L, EC, MP registration plates" , function(){
        assert.equal(regCheck("CA 23 NB EC" , "GP"), false);
    });
});