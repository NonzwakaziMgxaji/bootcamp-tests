describe("The findItemsOver function" , function(){
    it("should return products that have a quantity higher than threshold" , function(){
      
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}],30),[{"name":"pears","qty":37}]);
    });
});