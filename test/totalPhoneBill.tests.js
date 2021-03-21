describe("The totalPhoneBill function" , function(){
    it("should return the total bill for calls made and smses sent" , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });
});