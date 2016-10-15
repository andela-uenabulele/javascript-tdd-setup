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
})



  