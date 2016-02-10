//If we list all the natural numbers below 10 that are multiples 
//of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0; 
    for (var i = 0; i < 1000; i++) {
		if((i % 3 === 0) || (i % 5 === 0)) {
			sum += i;
		}
};

//line 6: setting our variable: sum to 0
//line 7: creating a basic 'for loop' in which our starting point is 0 and stopping poing is 1000, increasing by increments of 1
//line 8: if our variable is divisible by 3 OR 5 with a remainder of 0 than the solution should print true and be added to the sum of the digits
