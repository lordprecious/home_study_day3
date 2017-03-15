'use strict'

var file = {};

/** a function called findMissing(arr1, arr2)  that takes in two arguments, both of which are arrays. One of the arrays will have one extra number, the function returns the odd value; */
file.findMissing = function (arr1, arr2) {

	if(arr1.length === 0 || arr2.length === 0) { // condition that checks if any of the arrray is empty;
		return 0;

	} else if (arr1.length === arr2.length) {    // condition that checks if the length of both arrays are the same size then returns 0 if true
		return 0;

	}  else if(arr1.length !== arr2.length) {	 // condition that checks if the length of both arrays are diffrent
		var missingNumber = [];
		var joined = arr1.concat(arr2);			 // concantenate both arrays
		for(var i = 0; i < joined.length; i++ ) {
        var current = joined[i];

        if( joined.indexOf(current) == joined.lastIndexOf(current) ) {		// condition that checks if there are reapeated elements in the  concantenated array;
          missingNumber.push(current);
        }
      }

      return missingNumber[0];		// returns the element that is not repeated;
	}
}

module.exports = file;