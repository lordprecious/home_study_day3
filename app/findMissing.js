'use strict'

var file = {};

/** a function called findMissing(arr1, arr2)  that takes in two arguments,
both of which are arrays. One of the arrays will have one extra number, 
the function returns the odd value; */

file.findMissing = function (arr1, arr2) {

	// condition that checks if any of the arrray is empty;
	if (arr1.length === 0 || arr2.length === 0) { 
		return 0;

	// condition that checks if the length of both arrays are the same size then returns 0 if true
	} else if (arr1.length === arr2.length) {    
		return 0;

	// condition that checks if the length of both arrays are diffrent
	} else if (arr1.length !== arr2.length) {	 
		var missingNumber = [];
		// concantenate both arrays
		var joined = arr1.concat(arr2);			 
		for(var i = 0; i < joined.length; i++ ) {
        var current = joined[i];

        // condition that checks if there are reapeated elements in the  concantenated array;
        if ( joined.indexOf(current) == joined.lastIndexOf(current)) {		
          missingNumber.push(current);
        }
      }
      // returns the element that is not repeated;
      return missingNumber[0];		
	}
}

module.exports = file;