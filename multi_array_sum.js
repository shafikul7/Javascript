/*
Write a method multi_array_sum to find (and return) the sum of all the numbers in a 
multi-dimensional array of integers. A multi-dimensional array is an array for which
at least some elements are themselves arrays. In this example every array and sub-array
will only contain integers and/or more sub-arrays.

SAMPLE OUTPUT
Given a multi-dimensional array:
a = [1, [2, [3,4]], [5,6] ]

multi_array_sum would return 21.

NOTE
You may not use the ruby array #flatten method, JavaScript .toString or any other method
that would coerce arrays into completely different data types or solve the essential
problem for you. The problem can be solved through manually accessing the arrays by
indices. You are free to use Python but the test cases are only currently set up to work
for answers in Ruby or Javascript.

HINT
This problem should take about 12 lines or less.

*/

function multi_array_sum(arr) {
	
	// see how many things are in the current array
	var currArrayLength = arr.length;
	// console.log( "currArrayLength: " + currArrayLength);
	
	// loop through the array and sum each element
	for( var i = 0; i < currArrayLength; i++ ) {
		
		// console.log( "arr["+ i +"]: " +  arr[i]);
		
		// is the current element a number? if so, add it to the sum
		if ( typeof arr[i] === "number") {
			arraySum += arr[i];
			// console.log( "arraySum: " + arraySum );
		}
		// is the current element an array? if so, recursively call this function
		else if ( Array.isArray( arr[i] ) === true ) {
			// console.log( "RECURSING");
			multi_array_sum( arr[i] );
		}
		
		// if the current element is some other thing then it will be ignored
	}

	return arraySum;
}

// set a variable outside of the function to hold the sum and set it to zero to start
// not sure how to put it in the function and make it work
var arraySum = 0;
var a = [1, [2, [3,4]], [5,6] ];
var result = multi_array_sum( a );
console.log( result );

var arraySum = 0;
var b = [ [3,4,5], 6, 7, 8, [9, [10,11,[12,13]]]];
var result = multi_array_sum( b );
console.log( result );
