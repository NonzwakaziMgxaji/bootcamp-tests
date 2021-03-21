describe("The yearsAgo function" , function(){
    it("should return the number of years ago a year is from current year" , function(){
        assert.equal(yearsAgo(2017) , 4);
    });
});