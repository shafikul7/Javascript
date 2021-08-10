//multi_array_sum

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

var arraySum = 0;
var a = [1, [2, [3,4]], [5,6] ];
var result = multi_array_sum( a );
console.log( result );

var arraySum = 0;
var b = [ [3,4,5], 6, 7, 8, [9, [10,11,[12,13]]]];
var result = multi_array_sum( b );
console.log( result );
