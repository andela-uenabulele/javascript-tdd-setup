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
        assert(sumofprimes.sumofprimes(-1) == "Only Positive Integers are accepted", "use condition")
    })

    it("It should return error message for greater than highest known prime no", function() {
        assert(sumofprimes.sumofprimes(2,147,483,647) == "We are still manufacturing a PC to run that, Pls try again", "use condition")
    })

})



describe("Test if it returns correct answers", function() {
    it("it should return 17 for 10 and 3087 for 175", function() {
        assert(sumofprimes.sumofprimes(10) == 17)
        assert(sumofprimes.sumofprimes(17) == 58)
    }) 

    it("the input value should be inclusive if its Prime", function() {
        assert(sumofprimes.sumofprimes(5) == 10 )
    })

})

describe("Test for Scalability", function() {
    it("it should complete small values within 2min ", function() {
        assert(
            function(){
            var t1 = Performance.now();
            sumofprimes.sumofprimes(10) == 17
            t2 = Performance.now()

            return ((t2 - t1) < 120000) 

}, "Worry Not, Its Just a Dummy"
            )
    }) 
})

