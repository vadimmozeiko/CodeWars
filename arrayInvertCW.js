function invert(array) {

    const result = [];
    
     for (i = 0; i < array.length; i++){
        result.push(-array[i])
     }
    return result
  }
  describe("Invert array values", function(){
    it("Basic Tests", function(){
      Test.assertDeepEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
      Test.assertDeepEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
      Test.assertDeepEquals(invert([]), []);
      Test.assertDeepEquals(invert([0]), [0]);
    });
  });  