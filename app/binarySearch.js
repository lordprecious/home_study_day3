'use strict'

var file = {}

Array.prototype.toTwenty = function() { // function to generate an array containing 1 to 20;
  var oneToTwenty = [];
  for(var i = 1; i <= 20; i++) {
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};


Array.prototype.toForty = function() {  // function to generate an array containing 2 to 40 with an icreament of +2;
  var twoToForty = [];
  for(var i = 2; i <= 40; i += 2) {
    twoToForty.push(i);
  }
  return twoToForty;
};


Array.prototype.toOneThousand = function() {  // function to generate an array containing 10 to 1000 with an increament of +10
  var tenToOneThousand = [];
  for(var i = 10; i <= 1000; i += 10) {
    tenToOneThousand.push(i);
  }
  return tenToOneThousand;
};

Array.prototype.search = function(num) {   // the binary search function;
  var minIndex = 0;
  var maxIndex = this.length  -1;
  var currentElement;
  var currentIndex;

  this.count = 0;
  this.index = -1;

  while(minIndex <= maxIndex) {

    currentIndex = Math.floor((minIndex + maxIndex) / 2 );   // getting the mid point of the array
    currentElement = this[currentIndex];

    if (this[minIndex] === num) {      // check if middle element equals the search element
      
      this.index = minIndex;
      break;
    }
    else if (this[maxIndex] === num) {   //check if the last element in the array equals the search element
      this.index = maxIndex;
      break;
    }

    if (currentElement < num) {          // condition that checks if the current element is less than the search element;
      minIndex = currentIndex + 1;
    }
    else if (currentElement > num) {
      maxIndex = currentIndex - 1;
    }
    else {
      this.index = currentIndex;
      break;
    }

    this.count ++;
    
  }

  return this;
};


module.exports = file;
