/* Sum of Primes Application

A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. ... 
For example, 5 is prime because 1 and 5 are its only positive integer factors, 
whereas 6 is composite because it has the divisors 2 and 3 in addition to 1 and 6.

*/
'use strict'
module.exports = {
sumofprimes: function sumOfPrimes (value){
        //validate input
        if (Number.isInteger(value) === false || value < 0 ) return "Only Positive Integer values accepted";
        if (value > 2147483647) return "We are still manufacturing a PC to run that, Pls try again";
        var listprime = [];

        // List all numbers from 0 to n if they pass the isprime test    
        for (var i=2; i<value+1; i++){
         	
    if (isprime(i)){
            listprime.push(i);
        }

        }

        //get sum of the prime numbers
        var sumoflist  = listprime.reduce(function(a,b){
        return a+b;
    },0);

    return sumoflist;
    
    }


}

function isprime(value){
     if (value < 2) return false;
       //Test if value is a prime number
            for (var j=2; j<value; j++){
            if(value % j === 0){
                return false;
            }
            }
            return true;
        }