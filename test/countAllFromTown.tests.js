describe("The countAllFromTown function" , function(registrationNumbers,regTown){
    it("should return the number of registration numbers starting with CL in the string" , function(){
        assert.deepEqual(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CL"), 3);
    });

    it("should return the number of registration numbers starting with CF in the string" , function(){
    assert.deepEqual(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CF"), 0);
    });
});
