/*
To test the proper functionality of my SumOfPrimes function
*/

'use strict'

var chai = require('chai');
var assert = chai.assert;

var sumofprimes = require('./lib/sumofprimes.js');

describe("Test that the Input type by user is Authentiated ", function() {
    it("It should not accept Arrays", function() {
        assert(sumofprimes.sumofprimes([2,5]) == "Only Integer values accepted", "can use isniteger")
    }) 

    it("It should not accept Strings", function() {
        assert(sumofprimes.sumofprimes("this is not a Prime no") == "Only Integers are accepted", "can use isinteger")
    })

       it("It should not accept Decimal numbers", function() {
        assert(sumofprimes.sumofprimes(15.3) == "Only Integers are accepted", "can use isinteger")
    })

})


describe("Test if it handles special Integers like neg values etc ", function() {
    it("it should output 0 for input of 0 and 1", function() {
        assert(sumofprimes.sumofprimes(0) == 0, "0 isnt an Integers")
        assert(sumofprimes.sumofprimes(1) == 0, "0 isnt an Integers")
    }) 

    it("It should return error message for negative values", function() {
        assert(sumofprimes.sumofprimes(-1) == "Only Positive Integers are accepted" "use condition")
    })

    it("It should return error message for greater than highest known prime no", function() {
        assert(sumofprimes.sumofprimes(2,147,483,647) == "Only Positive Integers are accepted" "use condition")
    })

})



describe("Test if it returns correct answers and acomodates decimals such as 4.0", function() {
    it("it should return 17 for 10 and 3087 for 175", function() {
        assert(sumofprimes.sumofprimes(10) == 17)
        assert(sumofprimes.sumofprimes(17) == 58)
    }) 

    it("It should return error message for negative values", function() {
        assert(sumofprimes.sumofprimes(-1) == "Only Positive Integers are accepted" "use condition")
    })

    it("It should return error message for greater than highest known prime no", function() {
        assert(sumofprimes.sumofprimes(2,147,483,647) == "Only Positive Integers are accepted" "use condition")
    })

})
  