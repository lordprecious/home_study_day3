'use strict'

var file = {}

// function to generate an array containing 1 to 20;
Array.prototype.toTwenty = function () { 
  var oneToTwenty = [];
  for (var i = 1; i <= 20; i++) {
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};

// function to generate an array containing 2 to 40 with an icreament of +2;
Array.prototype.toForty = function () {  
  var twoToForty = [];
  for (var i = 2; i <= 40; i += 2) {
    twoToForty.push(i);
  }
  return twoToForty;
};

// function to generate an array containing 10 to 1000 with an increament of +10
Array.prototype.toOneThousand = function() {  
  var tenToOneThousand = [];
  for (var i = 10; i <= 1000; i += 10) {
    tenToOneThousand.push(i);
  }
  return tenToOneThousand;
};

// the binary search function;
Array.prototype.search = function (num) {   
  var minIndex = 0;
  var maxIndex = this.length  -1;
  var currentElement;
  var currentIndex;

  this.count = 0;
  this.index = -1;

  while(minIndex <= maxIndex) {

    // getting the mid point of the array
    currentIndex = Math.floor((minIndex + maxIndex) / 2 );   
    currentElement = this[currentIndex];

     // check if middle element equals the search element
    if (this[minIndex] === num) {     
      
      this.index = minIndex;
      break;

    // check if the last element in the array equals the search element
    } else if (this[maxIndex] === num) {  
      this.index = maxIndex;
      break;
    }

    // condition that checks if the current element is less than the search element;
    if (currentElement < num) {         
      minIndex = currentIndex + 1;

    } else if (currentElement > num) {
      maxIndex = currentIndex - 1;

    }s else {
      this.index = currentIndex;
      break;
    }

    this.count ++;
    
  }

  return this;
};


module.exports = file;
